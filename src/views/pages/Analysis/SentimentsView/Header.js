import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs,
  Grid,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SectorFilter from 'src/components/SectorFilter';

const timeRanges = [
  {
    value: 'today',
    text: 'Hoje'
  },
  {
    value: 'yesterday',
    text: 'Ontem'
  },
  {
    value: 'last_30_days',
    text: 'Últimos 30 dias'
  },
  {
    value: 'last_year',
    text: 'Último ano'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  // const [timeRange, setTimeRange] = useState(timeRanges[2].text);

  return (
    <Grid
      alignItems="center"
      container
      justify="space-between"
      spacing={3}
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
            Análises
          </Link>
          <Typography
            variant="body1"
            color="textPrimary"
          >
            Sentimentos
          </Typography>

        </Breadcrumbs>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          Veja as ultimas noticias
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
