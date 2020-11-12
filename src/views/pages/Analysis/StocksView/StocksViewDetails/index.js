import React from 'react'
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types'
import Header from './Header'
import Page from 'src/components/Page'
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
function StocksViewDetails(props) {
  const classes = useStyles();
  return (
    <Page
    className={classes.root}
    title="Stocks"
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
       
      </Grid>
    </Container>
  </Page>
  )
}

StocksViewDetails.propTypes = {

}

export default StocksViewDetails

