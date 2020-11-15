import React, {useState,useEffect,useCallback} from 'react'
import {
  Container,
  Grid,
  Box,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axiosMock';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import PropTypes from 'prop-types'
import Header from './Header'
import Page from 'src/components/Page'
import StocksList from './StocksList';
import { Stock } from 'src/models/stock';

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
function StocksView(props) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [stocks, setStocks] = useState(null);

  const getStocks = useCallback(() => {
    axios
      .get('/api/stocks/top-stocks')
      .then((response) => {
        if (isMountedRef.current) {
          if(response.data && Array.isArray(response.data.stocks)){
            const stocks = response.data.stocks.map((st)=>{
              const stock = new Stock()
              stock.setDataFromDB(st)
              return stock.toListItem()
            })
            setStocks(stocks);
          }else{
            return null
          }
        }
      })
  }, [isMountedRef]);

  useEffect(() => {
    getStocks();
  }, [getStocks]);

  if (!stocks) {
    return null;
  }


  return (
    <Page
      className={classes.root}
      title="Ações"
    >
      <Container maxWidth={false}>
        <Header />
        {stocks && (
          <Box mt={3}>
            <StocksList stocks={stocks} />
          </Box>
        )}
      </Container>
    </Page>
  )
}

StocksView.propTypes = {

}

export default StocksView

