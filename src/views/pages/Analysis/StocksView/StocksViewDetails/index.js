import React, { useEffect, useState, useCallback } from 'react'
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  ListItem,
  List,
  makeStyles,
  Typography,
  ListItemText
} from '@material-ui/core';
import PropTypes from 'prop-types'
import Header from './Header'
import Page from 'src/components/Page'
import axios from 'src/utils/axiosMock';
import { useHistory } from 'react-router';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import StocksPrices from './StocksPrices';
import Suggestion from './Suggestion';
import SentimentsGraph from '../../SentimentsView/SentimentsGraph';
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
  },
}));
function StocksViewDetails(props) {
  const classes = useStyles();
  const [stock, setStock] = useState(null);
  const history = useHistory();
  const isMountedRef = useIsMountedRef();
  const { params } = props.match

  const getStock = useCallback(() => {
    axios
      .get('/api/stocks/top-stocks')
      .then((response) => {
        if (isMountedRef.current) {
          const result = response.data.stocks.find((stock) => stock.ticker == params.detail)
          let stockModel = new Stock()
          if (result) {
            stockModel.setDataFromDB(result)
          } else {
            stockModel.setDataFromDB(response.data.stocks[0])
          }
          console.log(result)
          setStock(stockModel.toDetail())
          console.log(stockModel.toDetail())
        }
      })
  }, [isMountedRef]);

  useEffect(() => {
    getStock();
  }, [getStock]);

  // if (!stock) {
  //   return null;
  // }
  // useEffect(() => {
  //   const fetchData = async (id) => {
  //     try {
  //       let response = await axios.get(`/analysis/stock/${id}`)
  //       let docs = response.data
  //       setStock(docs)
  //     } catch (err) {
  //       let status = 404
  //       if (err && err.response && err.response.status) status = err.response.status
  //       switch (status) {
  //         case 404:
  //           history.goBack()
  //           break;
  //         default: 
  //           history.goBack()
  //       }
  //     }
  //   }
  //   if (params && params.detail) {
  //     fetchData(params.detail);
  //   } else {
  //     history.push('/')
  //   }

  // }, [])
  if(!stock){
    return null
  }
  return (
    <Page
      className={classes.root}
      title="Stocks"
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
        <Header ticker={params.detail} />
        <Grid container
          className={classes.root}
          spacing={2}  >
          <Grid container item xs={12} md={8} spacing={2} className={classes.container}>
            <Grid item xs={12}>
              <Card >
                <CardHeader
                  avatar={(
                    <Avatar
                      alt="Informações"
                      className={classes.avatar}
                    >
                      F
                    </Avatar>
                  )}
                  className={classes.header}
                  disableTypography
                  title={(
                    <Typography
                      display="block"
                      variant="overline"
                      color="textSecondary"
                    >
                      Fundamentos
                    </Typography>
                  )}
                />
                <CardContent className={classes.content}>
                  <List >
                    <ListItem
                      className={classes.listItem}
                      disableGutters
                      divider
                    >
                       <ListItemText
                        primary={'Empresa'}
                        primaryTypographyProps={{ variant: 'subtitle2' }}
                      />
                      <Typography
                        variant="h6"
                        color="textSecondary"
                      >
                        {stock.name}
                      </Typography>
                    </ListItem>
                    <ListItem
                      className={classes.listItem}
                      disableGutters
                      divider
                    >
                        <ListItemText
                        primary={'Divida liquida'}
                        primaryTypographyProps={{ variant: 'subtitle2' }}
                      />
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        noWrap
                        className={classes.wrap}
                      >
                        {stock?.fundamentus?.net_debt}
                      </Typography>
                    </ListItem>
                    <ListItem
                      className={classes.listItem}
                      disableGutters
                      divider
                    >
                          <ListItemText
                        primary={'Patrimonio liquido (PL)'}
                        primaryTypographyProps={{ variant: 'subtitle2' }}
                      />
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        noWrap
                        className={classes.wrap}
                      >
                        {stock?.fundamentus?.pl}
                      </Typography>
                    </ListItem>
                    <ListItem
                      className={classes.listItem}
                      disableGutters
                      divider
                    >
                          <ListItemText
                        primary={ 'Dividend Yield (%)'}
                        primaryTypographyProps={{ variant: 'subtitle2' }}
                      />
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        noWrap
                        className={classes.wrap}
                      >
                        {stock?.fundamentus?.div_yield}
                      </Typography>
                    </ListItem>
                    <ListItem
                      className={classes.listItem}
                      disableGutters
                      divider
                    >
                           <ListItemText
                        primary={ 'Taxa de Crescimento'}
                        primaryTypographyProps={{ variant: 'subtitle2' }}
                      />
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        noWrap
                        className={classes.wrap}
                      >
                        {stock?.fundamentus?.growth_rate}
                      </Typography>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

            </Grid>
            <Grid item xs={12}>
              <StocksPrices stock={stock} />
            </Grid>
            <Grid item xs={12}>
              <Suggestion title={'Valuation'} color="secondary" text={'Potencial de valorização de ação'} />

            </Grid>

          </Grid>
          <Grid container item xs={12} md={4} spacing={2}>
          <Grid item xs={12}>
              <Suggestion title={'Sentimento das noticias'} color="primary" text={'Tendência de alta'} />

            </Grid>
            <Grid item xs={12}>
              <SentimentsGraph />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

StocksViewDetails.propTypes = {

}

export default StocksViewDetails

