import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import StackAvatars from 'src/components/StackAvatars';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {},
  viewButton: {
    marginLeft: theme.spacing(2)
  }
}));

function StockPreview({ stock, className, ...rest }) {
  const classes = useStyles();

  // let deadline = 'N/A';
  // let critical = false;

  // if (stock.deadline) {
  //   const now = moment();
  //   const deadlineMoment = moment(stock.deadline);

  //   if (deadlineMoment.isAfter(now) && deadlineMoment.diff(now, 'day') < 3) {
  //     deadline = `${deadlineMoment.diff(now, 'day')} days remaining`;
  //     critical = true;
  //   }
  // }

  return (
    <ListItem
      className={clsx(
        classes.root,
        className
      )}
      {...rest}
    >
      <ListItemText
        className={classes.listItemText}
        primary={stock.name}
        primaryTypographyProps={{ variant: 'h6', noWrap: true }}
        secondary={stock.ticker}
      />
      <Tooltip title="View stock">
        <IconButton
          component={RouterLink}
          to={stock.href} 
          className={classes.viewButton}
          edge="end"
        >
          <OpenInNewIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
}

StockPreview.propTypes = {
  className: PropTypes.string,
  stock: PropTypes.object.isRequired
};

export default StockPreview;
