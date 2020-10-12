import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  Divider,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import {
  ArrowRight as ArrowRightIcon,
} from 'react-feather';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 200,
    backgroundColor: theme.palette.background.dark
  },
  likedButton: {
    color: colors.red[600]
  },
  subscribersIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  },
  tooltip: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '40px',
  },
  skeleton: {
    width: "100%"
  }

}));

function ArticleCardSkeleton({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box p={3}>
        <Skeleton animation="wave">
          <Box
            display="flex"
            alignItems="center"
            mt={2}
          >
          </Box>
        </Skeleton>
        <Skeleton animation="wave">
          <Box
            display="flex"
            alignItems="center"
            mt={2}
          >
          </Box>
        </Skeleton>
        <Skeleton animation="wave">
          <Box
            display="flex"
            alignItems="center"
            mt={2}
          >
          </Box>
        </Skeleton>
      </Box>
      <Box
        pb={2}
        px={3}
        color="textSecondary"
      >
        <Typography
          color="textSecondary"
          variant="body2"
        >
          <Skeleton variant="rect" height={118} />
        </Typography>
      </Box>
      <Box
        py={2}
        px={3}
      >
        <Grid
          alignItems="center"
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              <Skeleton width={100} className={classes.skeleton} animation="wave" />
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        py={2}
        pl={2}
        pr={3}
        display="flex"
        alignItems="center"
      >
        <Skeleton variant="circle" width={20} height={20} animation="wave" />
        <Skeleton variant="circle" width={20} height={20} animation="wave" />
        <Box flexGrow={1} />
        <IconButton
          href="#"
        >
          <SvgIcon fontSize="small">
            <ArrowRightIcon />
          </SvgIcon>
        </IconButton>
      </Box>
    </Card>
  );
}

ArticleCardSkeleton.propTypes = {
  className: PropTypes.string,
};

export default ArticleCardSkeleton;
