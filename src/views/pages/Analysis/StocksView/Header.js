import React, { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  SvgIcon,
  Typography,
  makeStyles,
  Menu,
  MenuItem
} from '@material-ui/core';
import {
  Calendar as CalendarIcon,
} from 'react-feather';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useDispatch, useSelector } from 'react-redux';
import { setSector } from 'src/actions/analysisActions';

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

const sectorsList = [
  {
    key: 'bank',
    label: 'Setor Bancário'
  },
];
function Header({ className, ...rest }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const actionRef = useRef(null);
  const {sector} = useSelector(state => state.analysis)
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(setSector(sectorsList[0]));
  }, [dispatch]);

  const handleSectorChange = async (sector ) =>{
    setMenuOpen(false)
    await dispatch(setSector(sector));
  }
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
            Analises
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
        <Button
          ref={actionRef}
          onClick={() => setMenuOpen(true)}
        >
          <SvgIcon
            fontSize="small"
            className={classes.actionIcon}
          >
            <CalendarIcon />
          </SvgIcon>
          {sector?.label}
        </Button>
        <Menu
          anchorEl={actionRef.current}
          onClose={() => setMenuOpen(false)}
          open={isMenuOpen}
          PaperProps={{ className: classes.menu }}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          {sectorsList.map((t) => (
            <MenuItem
              key={t.key}
              onClick={()=> handleSectorChange(t)}
            >
              {t.label}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
