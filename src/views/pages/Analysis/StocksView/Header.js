import React  from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs,
  Grid,
  Link,
  Typography,
  makeStyles,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SectorFilter from 'src/components/SectorFilter';

const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  actionIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Header({ className, ...rest }) {
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
            to="/app/analysis"
            component={RouterLink}
          >
            Análises
          </Link>
          <Link
            variant="body1"
            color="inherit"
            to="/app/analysis/stocks"
            component={RouterLink}
          >
            Ações
          </Link>
          </Breadcrumbs>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          Todas as ações
        </Typography>
      </Grid>
      <Grid item>
       <SectorFilter/>
      </Grid>
    
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
