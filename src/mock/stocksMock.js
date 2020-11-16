import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

mock.onGet('/api/stocks/top-stocks').reply(200, {
  stocks: [
    {
      _id: uuidv4(),
      color: colors.blueGrey['700'],
      name: 'Banco do Brasil',
      ticker: 'BBAS3',
      href: 'app/analysis/stocks/BBAS3',
      lastPrice: 53.03,
      date: '2020-11-16T00:00:00.000000000Z',
      valuation: {
        premisses:{
          CAPM:"13.0%",
          beta:0.86,
          betaDetails:"O beta desta ação indica que a empresa tende a acompanhar em menor nível a oscilação do mercado.",
          divPerShare:"R$ 1.16",
          growthRate:"1.5%",
          riskFree:"2.0%"
       },
        value: 25.00,
        status: 'ooverpriced'
      }
    },
    {
      _id: uuidv4(),
      color: colors.cyan['500'],
      name: 'Banco Itau',
      ticker: 'ITBU3',
      href: 'app/analysis/stocks/ITBU3',
      lastPrice: 39.51,
      date: '2020-11-16T00:00:00.000000000Z',
      valuation: {
        premisses:{
          CAPM:"13.0%",
          beta:0.86,
          betaDetails:"O beta desta ação indica que a empresa tende a acompanhar em menor nível a oscilação do mercado.",
          divPerShare:"R$ 1.16",
          growthRate:"1.5%",
          riskFree:"2.0%"
       },
        value: 23.00,
        status: 'overpriced'
      }
    },
    {
      _id: uuidv4(),
      color: colors.indigo[600],
      name: 'Banco Santander',
      ticker: 'SANB3',
      href: 'app/analysis/stocks/SANB3',
      lastPrice: 23.15,
      date: '2020-11-16T00:00:00.000000000Z',
      valuation: {
        premisses:{
          CAPM:"13.0%",
          beta:0.86,
          betaDetails:"O beta desta ação indica que a empresa tende a acompanhar em menor nível a oscilação do mercado.",
          divPerShare:"R$ 1.16",
          growthRate:"1.5%",
          riskFree:"2.0%"
       },
        value: 13.00,
        status: 'overpriced'
      }
    },
    {
      _id: uuidv4(),
      color: colors.red['500'],
      name: 'Banco BTG',
      ticker: 'BPAC3',
      href: 'app/analysis/stocks/BPAC3',
      lastPrice: 14.93,
      date: '2020-11-16T00:00:00.000000000Z',
      valuation: {
        premisses:{
          CAPM:"13.0%",
          beta:0.86,
          betaDetails:"O beta desta ação indica que a empresa tende a acompanhar em menor nível a oscilação do mercado.",
          divPerShare:"R$ 1.16",
          growthRate:"1.5%",
          riskFree:"2.0%"
       },
        value: 83.00,
        status: 'overpriced'
      }
    },
    {
      _id: uuidv4(),
      color: colors.orange['900'],
      name: 'Banco Bradesco',
      ticker: 'BBDC3',
      href: 'app/analysis/stocks/BBDC3',
      lastPrice: 7.21,
      date: '2020-11-16T00:00:00.000000000Z',
      valuation: {
        premisses:{
          CAPM:"13.0%",
          beta:0.86,
          betaDetails:"O beta desta ação indica que a empresa tende a acompanhar em menor nível a oscilação do mercado.",
          divPerShare:"R$ 1.16",
          growthRate:"1.5%",
          riskFree:"2.0%"
       },
        value: 23.00,
        status: 'overpriced'
      }
    }
  ]
});
