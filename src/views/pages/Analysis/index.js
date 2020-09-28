import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import LatestProjects from 'src/views/reports/DashboardView/LatestProjects';
import NewProjects from 'src/views/reports/DashboardView/NewProjects';
import PerformanceOverTime from 'src/views/reports/DashboardView/PerformanceOverTime';
import RealTime from 'src/views/reports/DashboardView/RealTime';
import RoiPerCustomer from 'src/views/reports/DashboardView/RoiPerCustomer';
import SystemHealth from 'src/views/reports/DashboardView/SystemHealth';
import TeamTasks from 'src/views/reports/DashboardView/TeamTasks';
import TodaysMoney from 'src/views/reports/DashboardView/TodaysMoney';
import StocksPreview from './StocksPreview';

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
          {/* <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <TodaysMoney />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <NewProjects />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <SystemHealth />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <RoiPerCustomer />
          </Grid>
          <Grid
            item
            lg={3}
            xs={12}
          >
            <RealTime />
          </Grid>
          <Grid
            item
            lg={9}
            xs={12}
          >
            <PerformanceOverTime />
          </Grid> */}
          <Grid
            item
            lg={5}
            xl={4}
            xs={12}
          >
            <StocksPreview />
          </Grid>
          <Grid
            item
            lg={5}
            xl={4}
            xs={12}
          >
            <TeamTasks />
          </Grid>
          <Grid
            item
            lg={12}
            xl={12}
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
