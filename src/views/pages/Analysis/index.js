import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import LatestProjects from 'src/views/reports/DashboardView/LatestProjects';
import StocksPreview from './StocksView/StocksPreview';
import SentimentsPreview from './SentimentsView/SentimentsPreview';
import SentimentsGraph from './SentimentsView/SentimentsGraph';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64
    }
  }
}));

function Analysis() {
  const classes = useStyles();
  
  return (
    <Page
      className={classes.root}
      title="Analises"
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
        <Header />
        <Grid
          container
          spacing={3}
        >
          
          <Grid
            item
            md={6}
            xs={12}
          >
            <SentimentsPreview />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <SentimentsGraph />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <StocksPreview />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <LatestProjects />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Analysis;
