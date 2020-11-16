import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Typography,
  makeStyles
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { ArrowUp } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    height: 48,
    width: 48
  },
  rootPrimary:{
    color: theme.palette.success.contrastText,
    backgroundColor: theme.palette.success.main,
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatarPrimary:{
    backgroundColor: theme.palette.success.contrastText,
    color: theme.palette.success.main,
    height: 48,
    width: 48
  }
}));

function Suggestion({ className,title,text,icon,color, ...rest }) {
  const classes = useStyles(color);

  return (
    <Card
      className={clsx(color == 'secondary' ? classes.root : classes.rootPrimary, className)}
      {...rest}
    >
      <Box flexGrow={1}>
        <Typography
          color="inherit"
          component="h3"
          gutterBottom
          variant="overline"
        >
          {title}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          <Typography
            color="inherit"
            variant="h3"
          >
            {text}
          </Typography>
        </Box>
      </Box>
      <Avatar
        className={color == 'secondary' ? classes.avatar : classes.avatarPrimary }
        color="inherit"
      >
        {icon}
      </Avatar>
    </Card>
  );
}

Suggestion.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.element,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'success'])
};
Suggestion.defaultProps = {
  className: '',
  color: 'secondary',
  icon:  <ArrowUp />
};

export default Suggestion;
