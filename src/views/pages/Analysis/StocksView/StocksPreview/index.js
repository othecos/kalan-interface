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
import axiosMock from 'src/utils/axiosMock';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GenericMoreButton from 'src/components/GenericMoreButton';
import StockPreviewItem from './StockPreviewItem';
import { Stock } from 'src/models/stock';
import LoadingComponent from 'src/components/LoadingComponent';

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

  const getStocksPreview = useCallback(async () => {
    const response = await axios.get('/analysis/stocks/')
    if (isMountedRef.current && response.data ) {
      const stocks = response.data.map((st) => {
        const stock = new Stock()
        stock.setDataFromDB(st)
        return stock.toPreview()
      })
      setStocksPreview(stocks);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getStocksPreview();
  }, [getStocksPreview]);

  if (!stocksPreview) {
    return <LoadingComponent></LoadingComponent>;
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
