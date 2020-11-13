import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Link,
  SvgIcon,
  Tooltip,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Users as UsersIcon } from 'react-feather';
import {
  Edit as EditIcon,
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon
} from 'react-feather';

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
  }

}));

function ArticleCard({ article, className, ...rest }) {
  const classes = useStyles();
  const [isLiked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLiked(true);
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleUnlike = () => {
    setLiked(false);
    setLikes((prevLikes) => prevLikes - 1);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box p={3}>
        <Box
          display="flex"
          alignItems="center"
          mt={2}
        >
          <Box ml={2}>
            <Link
              color="textPrimary"
              component={RouterLink}
              to={`/app/sentiments/${article._id}`}
              variant="h5"
            >
              {article?.title.text}
            </Link>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              by
              {' '}
              <Link
                color="textPrimary"
                href={article.title.href}
                variant="h6"
                target="_blank"
              >
                {article?.metadata.source}
              </Link>
              {' '}
              | Publicated
              {' '}
              {article?.metadata?.datetime}
            </Typography>
          </Box>
        </Box>
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
          {article?.resume}
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
              variant="h5"
              color="textPrimary"
            >
              Busca
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              {article?.metadata?.query}
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
        {isLiked ? (
          <Tooltip title="Unlike">
            <IconButton
              className={classes.likedButton}
              onClick={handleUnlike}
            >
              <FavoriteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : (
            <Tooltip title="Like">
              <IconButton onClick={handleLike}>
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        <Typography
          variant="subtitle2"
          color="textSecondary"
        >
          {likes}
        </Typography>
        <SvgIcon
          fontSize="small"
          color="action"
          className={classes.subscribersIcon}
        >
          <UsersIcon />
        </SvgIcon>
        <Box flexGrow={1} />
        <IconButton
          component={RouterLink}
          to={`/app/analysis/sentiments/${article._id}`}
        >
          <SvgIcon fontSize="small">
            <ArrowRightIcon />
          </SvgIcon>
        </IconButton>
      </Box>
    </Card>
  );
}

ArticleCard.propTypes = {
  className: PropTypes.string,
  article: PropTypes.object.isRequired
};

export default ArticleCard;
