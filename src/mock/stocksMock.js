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
      price: 53.03,
      valuation: {
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
      price: 39.51,
      valuation: {
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
      price: 23.15,
      valuation: {
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
      price: 14.93,
      valuation: {
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
      price: 7.21,
      valuation: {
        value: 23.00,
        status: 'overpriced'
      }
    }
  ]
});
