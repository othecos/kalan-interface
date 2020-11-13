import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
  makeStyles,
  Box,
  Typography,
  Grid
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import StackAvatars from 'src/components/StackAvatars';
import { Link as RouterLink,useLocation } from 'react-router-dom';
import axios from 'src/utils/axios'

const useStyles = makeStyles((theme) => ({
  root: {},
  viewButton: {
    marginLeft: theme.spacing(2)
  }
}));

function StockPreview({ stock, className, ...rest }) {
  const classes = useStyles();
  const location = useLocation();
  return (
    <ListItem
      className={clsx(
        classes.root,
        className
      )}
      {...rest}
    >
      <Grid container >
        <Grid item xs={7}>
          <ListItemText
            className={classes.listItemText}
            primary={stock.name}
            primaryTypographyProps={{ variant: 'h6', noWrap: true }}
            secondary={stock.ticker}
          />
        </Grid>


        <Grid container spacing={2} item xs={5} alignItems="center" justify="flex-end">
          <Grid item >
            <Typography
              align="right"
              variant="h6"
              color="textPrimary"
            >
             Atual - {stock.price || 'R$42,00'} 
            </Typography>
            <Typography
              variant="body2"
              color={"textSecondary"}
            >
              Justo -  <span className="secondary"> { stock?.valuation?.value || 'R$21,00'}</span>
            </Typography>
          </Grid>
          <Grid item>
            <Tooltip title="View stock">
              <IconButton
                component={RouterLink}
                to={`${location.pathname}/stocks/${stock.ticker}`}
                className={classes.viewButton}
              >
                <OpenInNewIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Grid>

        </Grid>
      </Grid>


    </ListItem>
  );
}

StockPreview.propTypes = {
  className: PropTypes.string,
  stock: PropTypes.object.isRequired
};

export default StockPreview;
