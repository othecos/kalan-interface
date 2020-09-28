import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

mock.onGet('/api/stocks/top-stocks').reply(200, {
  stocks: [
    {
      id: uuidv4(),
      color: colors.blueGrey['700'],
      name: 'Banco do Brasil',
      ticker: 'BBAS3',
      href: 'app/analysis/stocks/BBAS3',
      initials: 'GT',
      value: '53,032'
    },
    {
      id: uuidv4(),
      color: colors.cyan['500'],
      name: 'Banco Itau',
      ticker: 'ITBU3',
      href: 'app/analysis/stocks/ITBU3',
      initials: 'TW',
      value: '39,551'
    },
    {
      id: uuidv4(),
      color: colors.indigo[600],
      name: 'Banco Santander',
      ticker: 'SANB3',
      href: 'app/analysis/stocks/SANB3',
      value: '23,150'
    },
    {
      id: uuidv4(),
      color: colors.red['500'],
      name: 'Banco BTG',
      ticker: 'BPAC3',
      href: 'app/analysis/stocks/BPAC3',
      value: '14,093'
    },
    {
      id: uuidv4(),
      color: colors.orange['900'],
      name: 'Banco Bradesco',
      ticker: 'BBDC3',
      href: 'app/analysis/stocks/BBDC3',
      value: '7,251'
    }
  ]
});
