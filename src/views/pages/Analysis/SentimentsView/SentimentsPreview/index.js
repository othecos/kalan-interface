import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  colors,
  makeStyles,
  Link,
  SvgIcon,
  IconButton
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GenericMoreButton from 'src/components/GenericMoreButton';
import CircularProgress from './CircularProgress';
import { useSelector } from 'react-redux';
import { Article } from 'src/models/article';
import { trimEllpsis } from 'src/utils/string';
import {
  Settings as SettingsIcon,
  Edit as EditIcon
} from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    flexShrink: 0,
    height: 56,
    width: 56
  },
  subscriptions: {
    fontWeight: theme.typography.fontWeightMedium
  },
  value: {
    color: colors.green[600],
    fontWeight: theme.typography.fontWeightMedium
  },
  navigateNextIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function SentimentsPreview({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const { sector } = useSelector(state => state.analysis)
  const [articlesSentiments, setArticlesSentiments] = useState(null);

  const getArticlesSentiments = useCallback(async () => {
    let response = await axios.get('/analysis/news/')
    if (isMountedRef.current) {
      if (response.data && Array.isArray(response.data)) {
        const news = response.data.slice(0, 5).map((art) => {
          const article = new Article()
          article.setDataFromDB(art)
          return article.toPreview()
        })
        setArticlesSentiments(news)
      } else {
        return null
      }
    }
    ;
  }, [isMountedRef]);

  useEffect(() => {
    getArticlesSentiments();
  }, [getArticlesSentiments]);

  if (!articlesSentiments) {
    return null;
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Noticias"
      />
      <Divider />
      <PerfectScrollbar>
        <Box >
          <Table>
            <TableBody>
              {articlesSentiments.map((articleSentiments) => (

                <TableRow
                  hover
                  key={articleSentiments._id}

                >
                    <TableCell>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box ml={2}>
                          <Typography
                            variant="h6"
                            color="textPrimary"
                          >
                            {trimEllpsis(articleSentiments.title.text, 30)}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                          >
                            <span className={classes.subscriptions}>
                              {articleSentiments.metadata.source}
                            </span>
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mr={2}>
                          <Box mr={2}>
                            <Typography
                              align="right"
                              variant="h6"
                              color="textPrimary"
                            >
                              {articleSentiments?.score?.label}
                            </Typography>
                          </Box>

                          <IconButton
                        component={RouterLink}
                        to={`/app/analysis/sentiments/${articleSentiments._id}`}
                      >
                          <CircularProgress value={100} color={articleSentiments.score.value == -1 ? 'negative' : articleSentiments.score.value == 0 ? 'neutral' : 'positive'} />
                          </IconButton>
                        </Box>
                      </Box>
                    </TableCell>
                </TableRow>
              
              
             ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
        <Box
          p={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            component={RouterLink}
            size="small"
            to={`/app/analysis/sentiments/`}
          >
            Ver todas
          <NavigateNextIcon className={classes.navigateNextIcon} />
          </Button>
        </Box>
    </Card>
  );
}

SentimentsPreview.propTypes = {
        className: PropTypes.string
};

export default SentimentsPreview;
