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
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from 'src/utils/axiosMock';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GenericMoreButton from 'src/components/GenericMoreButton';
import CircularProgress from './CircularProgress';
import { useSelector } from 'react-redux';

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
  const {sector } = useSelector(state=> state.analysis)
  const [articlesSentiments, setArticlesSentiments] = useState(null);

  const getArticlesSentiments = useCallback(() => {
    axios
      .get('/api/analysis/sentiments')
      .then((response) => {
        if (isMountedRef.current) {
          setArticlesSentiments(response.data.articlesSentiments);
        }
      });
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
        action={<GenericMoreButton />}
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
                  key={articleSentiments.id}
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
                          {articleSentiments.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >
                          <span className={classes.subscriptions}>
                            {articleSentiments.source}
                          </span>
                        </Typography>
                      </Box>
                      <Box display="flex" mr={2}>
                        <Box  mr={2}>
                          <Typography
                            align="right"
                            variant="h6"
                            color="textPrimary"
                          >
                            {articleSentiments.sentiments.score}
                          %
                        </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                          >
                            Sentimento
                        </Typography>
                        </Box>

                        <CircularProgress value={articleSentiments.sentiments.score * 100} />
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
          to={`/app/analysis/sentiments/${sector?.key}`}
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
