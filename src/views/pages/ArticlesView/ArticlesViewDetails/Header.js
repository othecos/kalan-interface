import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Edit as EditIcon } from 'react-feather';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Header({articleTitleShortHand, className, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/app"
            component={RouterLink}
          >
            Application
          </Link>
          <Link
            variant="body1"
            color="inherit"
            to="/app/articles"
            component={RouterLink}
          >
            Articles
          </Link>
          <Typography
            variant="body1"
            color="textPrimary"
          >
            {articleTitleShortHand}
          </Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  articleTitleShortHand: PropTypes.string.isRequired
};

export default Header;
