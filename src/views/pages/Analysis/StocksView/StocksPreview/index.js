import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axiosMock';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GenericMoreButton from 'src/components/GenericMoreButton';
import StockPreviewItem from './StockPreviewItem';
import { Stock } from 'src/models/stock';

const useStyles = makeStyles(() => ({
  root: {}
}));

function StocksPreview({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [stocksPreview, setStocksPreview] = useState(null);


  // const [stocks, setStocks] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //       let response = await axios.get('/analysis/stocks/')
  //       console.log(response.data);
  //       let docs = response.data
  //       setArticles(docs)
  //     }catch(err){
  //       if(err.response){
  //         console.error("Error response:");
  //         console.error(err.response);    // ***
  //         console.error(err?.response?.status);  // ***
  //         console.error(err?.response?.headers); // ***
  //       }
  //     }
  //   }
  //   fetchData();
  // }, [])

  const getStocksPreview = useCallback(() => {
    axios
      .get('/api/stocks/top-stocks')
      .then((response) => {
        if (isMountedRef.current) {
          if(response.data && Array.isArray(response.data.stocks)){
            const stocks = response.data.stocks.map((st)=>{
              const stock = new Stock()
              stock.setDataFromDB(st)
              return stock.toListPreviewItem()
            })
            setStocksPreview(stocks);
          }else{
            return null
          }
        }
      })
  }, [isMountedRef]);

  useEffect(() => {
    getStocksPreview();
  }, [getStocksPreview]);

  if (!stocksPreview) {
    return null;
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Ações"
      />
      <Divider />
      <PerfectScrollbar>
        <Box >
          <List>
            {stocksPreview.map((stock, i) => (
              <StockPreviewItem
                divider={i < stocksPreview.length - 1}
                key={stock.key}
                stock={stock}
              />
            ))}
          </List>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

StocksPreview.propTypes = {
  className: PropTypes.string
};

export default StocksPreview;
