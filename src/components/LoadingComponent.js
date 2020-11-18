import React from 'react';
import {
  Box,
  CircularProgress,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    padding: theme.spacing(3),
    position: 'relative',
    top: 0,
    width: '100%',
  },
}));

function LoadingComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        justifyContent="center"
      >
          <CircularProgress />
      </Box>
    
    </div>
  );
}

export default LoadingComponent;
