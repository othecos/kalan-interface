import React, {useEffect} from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
    paddingTop: 0
  },
  listItem: {
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between'
  },
  wrap: {
    maxWidth: '50%'
  },
  container:{
    height:'100%'
  }
}));

function Sentiments({ article, className, ...rest }) {
  const classes = useStyles();
  useEffect(() => {
  }, [article])
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
                  {article?.title?.text}
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
                <Typography
                  variant="h6"
                  color="textSecondary"
                  noWrap
                  className={classes.wrap}
                >
                  {article?.title?.href}
                </Typography>
              </ListItem>
            </List>
          </CardContent>
        </Card>

      </Grid>
      <Grid item xs={12} md={4}>
        <Score score={article.score} terms={['Selic', 'Selic Up', 'Selic stay']} />
      </Grid>
    </Grid>
  );
}

Sentiments.propTypes = {
  className: PropTypes.string,
  article: PropTypes.object
};
Sentiments.defaultProps = {
  article: {}
}
export default Sentiments;
