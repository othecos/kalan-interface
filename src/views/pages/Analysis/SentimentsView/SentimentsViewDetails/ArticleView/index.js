import React from 'react';
import {
  Box,
  Container,
  Divider,
  Typography,
  makeStyles, Paper, Grid
} from '@material-ui/core';
import Page from 'src/components/Page';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
const useStyles = makeStyles((theme) => ({
  root: {}
}));

function ArticleView({ article, className, ...rest }) {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Artigo"
    >
      <Container maxWidth="lg">
        <Paper
          className={clsx(classes.root, className)}
          {...rest}
        >
          <PerfectScrollbar>
            <Box
              minWidth={800}
              p={6}
            >
              <Grid
                container
                justify="flex-end"
              >
                <Grid item>
                  <Typography
                    align="right"
                    variant="h2"
                    color="textPrimary"
                  >
                    {article?.title?.text}
              </Typography>
                </Grid>
              </Grid>

              <Box mt={2}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  {article.resume}
                </Typography>
              </Box>
            </Box>
          </PerfectScrollbar>
        </Paper>
      </Container>
    </Page>
  );
}

ArticleView.propTypes = {
  className: PropTypes.string,
  article: PropTypes.object
};
ArticleView.defaultProps = {
  article :{
    title:{
      text: '',
      href: ''
    },
    resume: ''
  }
}

export default ArticleView;
