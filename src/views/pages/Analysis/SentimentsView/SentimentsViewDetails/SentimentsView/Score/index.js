import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import getInitials from 'src/utils/getInitials';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GenericMoreButton from 'src/components/GenericMoreButton';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100%'
  },
  list: {
    overflow: 'auto'
  },
  item: {
    padding: theme.spacing(3),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }
}));

function Score({ score, className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Analise de sentimentos"
      />
      <Divider />
      <Box display="flex">
        <div className={classes.item}>
          <Typography
            align="center"
            variant="h3"
            color="secondary"
          >
            {score.label}
          </Typography>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Sentimento
          </Typography>
        </div>
        <Divider />
        <div className={classes.item}>
          <Typography
            align="center"
            variant="h3"
            color="textPrimary"
          >
            {score?.sector?.label}
          </Typography>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Setor
          </Typography>
        </div>
      </Box>
      <Divider />
      {score && score.terms && score.terms.length > 0 &&
        <List disablePadding className={classes.list}>
          {score.terms.map((terms, index) => (
            <ListItem
              divider={index < terms.length - 1}
              key={`terms_${index}`}
            >
              <ListItemText
                disableTypography
                primary={(
                  <Typography
                    color="textPrimary"
                    underline="none"
                    variant="h6"
                  >
                    Termos
                  </Typography>
                )}
                secondary={(
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >
                    {terms}
                  </Typography>
                )}
              />
            </ListItem>
          ))}
        </List>
      }
    </Card>
  );
}

Score.propTypes = {
  className: PropTypes.string,
  score: PropTypes.object,
};
Score.defaultProps = {
  score: {
    label: 'Neutro',
    value: 0,
    terms: [],
    sector: {
      label: ''
    }
  },

}
export default Score;
