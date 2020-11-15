/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link as RouterLink,useLocation } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
  Box,
  Button,
  Card,
  Checkbox,
  InputAdornment,
  FormControlLabel,
  IconButton,
  Link,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  makeStyles
} from '@material-ui/core';
import {
  Image as ImageIcon,
  Edit as EditIcon,
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon
} from 'react-feather';
import Label from 'src/components/Label';

const categoryOptions = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'dress',
    name: 'Dress'
  },
  {
    id: 'jewelry',
    name: 'Jewelry'
  },
  {
    id: 'blouse',
    name: 'Blouse'
  },
  {
    id: 'beauty',
    name: 'Beauty'
  }
];

const avalabilityOptions = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'available',
    name: 'Available'
  },
  {
    id: 'unavailable',
    name: 'Unavailable'
  }
];

const sortOptions = [
  {
    value: 'updatedAt|desc',
    label: 'Last update (newest first)'
  },
  {
    value: 'updatedAt|asc',
    label: 'Last update (oldest first)'
  },
  {
    value: 'createdAt|desc',
    label: 'Creation date (newest first)'
  },
  {
    value: 'createdAt|asc',
    label: 'Creation date (oldest first)'
  }
];

function getStockTicker(stockTicker) {
  // const map = {
  //   in_stock: {
  //     text: 'In Stock',
  //     color: 'success'
  //   },
  //   out_of_stock: {
  //     text: 'Out of Stock',
  //     color: 'error'
  //   },
  //   limited: {
  //     text: 'Limited',
  //     color: 'warning'
  //   }
  // };

  // const { text, color } = map[inventoryType];

  return (
    <Label color="success">
      {stockTicker}
    </Label>
  );
}

function applyFilters(stocks, query, filters) {
  return stocks.filter((stock) => {
    let matches = true;

    return matches;
  });
}

function applyPagination(customers, page, limit) {
  return customers.slice(page * limit, page * limit + limit);
}

const useStyles = makeStyles((theme) => ({
  root: {},
  bulkOperations: {
    position: 'relative'
  },
  bulkActions: {
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 6,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  },
  bulkAction: {
    marginLeft: theme.spacing(2)
  },
  queryField: {
    width: 500
  },
  categoryField: {
    flexBasis: 200
  },
  availabilityField: {
    marginLeft: theme.spacing(2),
    flexBasis: 200
  },
  stockField: {
    marginLeft: theme.spacing(2)
  },
  shippableField: {
    marginLeft: theme.spacing(2)
  },
  imageCell: {
    fontSize: 0,
    width: 68,
    flexBasis: 68,
    flexGrow: 0,
    flexShrink: 0
  },
  image: {
    height: 68,
    width: 68
  }
}));

function StocksList({ className, stocks, ...rest }) {
  const classes = useStyles();
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState(sortOptions[0].value);
  const location = useLocation();
  const [filters, setFilters] = useState({
    category: null,
    availability: null,
    inStock: null,
    isShippable: null
  });
 
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };
  

  // Usually query is done on backend with indexing solutions
  const filteredStocks = applyFilters(stocks, query, filters);
  const paginatedStocks = applyPagination(filteredStocks, page, limit);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                 Código
                </TableCell>
                <TableCell>
                  Nome
                </TableCell>
                <TableCell>
                  Preço
                </TableCell>
                <TableCell>
                  Preço Alvo / Valuation
                </TableCell>
                <TableCell align="right">
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedStocks.map((stock) => {
                const isStockSelected = selectedStocks.includes(stock.key);
                return (
                  <TableRow
                    hover
                    key={stock.key}
                    selected={isStockSelected}
                  >
                    <TableCell className={classes.imageCell}>
                      {stock.image ? (
                        <img
                          alt="Imagem ativo"
                          src={stock.image}
                          className={classes.image}
                        />
                      ) : (
                        <Box
                          p={2}
                          bgcolor="background.dark"
                        >
                          <SvgIcon>
                            <ImageIcon />
                          </SvgIcon>
                        </Box>
                      )}
                    </TableCell>
                    <TableCell>
                      {getStockTicker(stock.ticker)}
                    </TableCell>
                    <TableCell>
                     {stock.name}
                    </TableCell>
                    <TableCell>
                     {stock.price}
                    </TableCell>
                    <TableCell>
                      {stock.valuation.value}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                       component={RouterLink}
                       to={`${location.pathname}/${stock.ticker}`}
                      >
                        <SvgIcon fontSize="small">
                          <ArrowRightIcon />
                        </SvgIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={filteredStocks.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

StocksList.propTypes = {
  className: PropTypes.string,
  stocks: PropTypes.array
};

StocksList.defaultProps = {
  stocks: []
};

export default StocksList;
