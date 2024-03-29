import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  CardHeader,
  Link,
  List,
  ListItem,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import getInitials from 'src/utils/getInitials';
import Score from './Score';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  header: {
    paddingBottom: 0
  },
  content: {
    paddingTop: 0,
    maxHeight: '100%',
    overflow: 'auto'
  },
  listItem: {
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between'
  },
  wrap: {
    maxWidth: '50%'
  },
  container: {
    height: '100%'
  }
}));

function Sentiments({ sentiments, className, ...rest }) {
  const classes = useStyles();
  return (

    <Grid container
      className={clsx(classes.root, className)}
      spacing={2}
      {...rest} >
      <Grid item xs={12} md={8} className={classes.container}>
        <Card >
          <CardHeader
            avatar={(
              <Avatar
                alt="Informações"
                className={classes.avatar}
              >
                I
              </Avatar>
            )}
            className={classes.header}
            disableTypography
            title={(
              <Typography
                display="block"
                variant="overline"
                color="textSecondary"
              >
                Informações adicionais
              </Typography>
            )}
          />
          <CardContent className={classes.content}>
            <List>
              <ListItem
                className={classes.listItem}
                disableGutters
                divider
              >
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                >
                  Titulo
            </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  color="textSecondary"
                  className={classes.wrap}
                >
                  {sentiments?.title?.text}
                </Typography>
              </ListItem>
              <ListItem
                className={classes.listItem}
                disableGutters
                divider
              >

                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                >
                  Link
            </Typography>
                <Link
                  color="textSecondary"

                  href={sentiments?.title?.href}
                  target="_blank"
                  noWrap
                  variant="h6"
                  className={classes.wrap}
                >
                  {sentiments?.title?.href}
                </Link>
              </ListItem>
            </List>
          </CardContent>
        </Card>

      </Grid>
      <Grid item xs={12} md={4}>
        <Score score={sentiments?.score} />
      </Grid>
    </Grid>
  );
}

Sentiments.propTypes = {
  className: PropTypes.string,
  sentiments: PropTypes.object,
};
export default Sentiments;
