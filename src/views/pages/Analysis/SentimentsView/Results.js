import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Grid,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  ToggleButtonGroup,
  ToggleButton,
  Pagination
} from '@material-ui/lab';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ProjectCard from 'src/components/ProjectCard';
import ArticleCard from 'src/components/ArticleCard';
import { useEffect } from 'react';
import { Link } from 'react-router'
import ArticleCardSkeleton from 'src/components/ArticleCardSkeleton';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  },

  sortButton: {
    textTransform: 'none',
    letterSpacing: 0,
    marginRight: theme.spacing(2)
  }
}));

function Results({ className, articles, ...rest }) {
  const classes = useStyles();
  const sortRef = useRef(null);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const lengthPerPage = 10
  const [openSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Most popular');
  const [mode, setMode] = useState('grid');
  const [count, setCount] = useState(10);
  const [articlesPiece, setArticlesPiece] = useState([]);

  const handleSortOpen = () => {
    setOpenSort(true);
  };

  useEffect(() => {
    if(articles){
      setArticlesPiece(articles.slice(0, lengthPerPage))
      setCount(Math.round(articles.length / lengthPerPage))
    }
  }, [articles])

  const handleSortClose = () => {
    setOpenSort(false);
  };
  const handlePaginationChange = (event, value) => {
    const index = (value - 1) * lengthPerPage
    const finalIndex = index + lengthPerPage
    setArticlesPiece(articles.slice(index, finalIndex))
  };

  const handleSortSelect = (value) => {
    setSelectedSort(value);
    setOpenSort(false);
  };

  const handleModeChange = (event, value) => {
    setMode(value);
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mb={2}
      >
        <Typography
          className={classes.title}
          variant="h5"
          color="textPrimary"
        >
          Visualizando
          {' '}
          {articles?.length}
          {' '}
          noticias
        </Typography>
        <Box
          display="flex"
          alignItems="center"
        >
          <Button
            className={classes.sortButton}
            onClick={handleSortOpen}
            ref={sortRef}
          >
            {selectedSort}
            <ArrowDropDownIcon />
          </Button>
          <ToggleButtonGroup
            exclusive
            onChange={handleModeChange}
            size="small"
            value={mode}
          >
            <ToggleButton value="grid">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Grid
        container
        spacing={3}
      >
        {articles && articlesPiece.map((article) => (
          <Grid
            item
            key={article._id}
            md={mode === 'grid' ? 4 : 12}
            sm={mode === 'grid' ? 6 : 12}
            xs={12}
          >
            <ArticleCard article={article} />
          </Grid>
        ))}
        {!articles && skeleton.map((sk,index) => (
          <Grid
            item
            key={`Skeleton_${index}`}
            md={mode === 'grid' ? 4 : 12}
            sm={mode === 'grid' ? 6 : 12}
            xs={12}
          >
            <ArticleCardSkeleton />
          </Grid>
        ))}
      </Grid>
      <Box
        mt={6}
        display="flex"
        justifyContent="center"
      >
        <Pagination onChange={handlePaginationChange} count={count} />
      </Box>
      <Menu
        anchorEl={sortRef.current}
        className={classes.menu}
        onClose={handleSortClose}
        open={openSort}
        elevation={1}
      >
        {['Most recent', 'Popular', 'Price high', 'Price low', 'On sale'].map(
          (option) => (
            <MenuItem
              key={option}
              onClick={() => handleSortSelect(option)}
            >
              <ListItemText primary={option} />
            </MenuItem>
          )
        )}
      </Menu>
    </div>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  articles: PropTypes.array
};

export default Results;
