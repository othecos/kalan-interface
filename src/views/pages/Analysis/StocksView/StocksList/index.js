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

    // if (query && !product.name.toLowerCase().includes(query.toLowerCase())) {
    //   matches = false;
    // }

    // if (filters.category && product.category !== filters.category) {
    //   matches = false;
    // }

    // if (filters.availability) {
    //   if (filters.availability === 'available' && !product.isAvailable) {
    //     matches = false;
    //   }

    //   if (filters.availability === 'unavailable' && product.isAvailable) {
    //     matches = false;
    //   }
    // }

    // if (filters.inStock && !['in_stock', 'limited'].includes(product.inventoryType)) {
    //   matches = false;
    // }

    // if (filters.isShippable && !product.isShippable) {
    //   matches = false;
    // }

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

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      category: value
    }));
  };

  const handleAvailabilityChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      availability: value
    }));
  };

  const handleStockChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      inStock: value
    }));
  };

  const handleShippableChange = (event) => {
    event.persist();

    let value = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      isShippable: value
    }));
  };

  const handleSortChange = (event) => {
    event.persist();
    setSort(event.target.value);
  };

  const handleSelectAllStocks = (event) => {
    setSelectedStocks(event.target.checked
      ? stocks.map((stock) => stock.id)
      : []);
  };

  const handleSelectOneStocks = (event, stockId) => {
    if (!selectedStocks.includes(stockId)) {
      setSelectedStocks((prevSelected) => [...prevSelected, stockId]);
    } else {
      setSelectedStocks((prevSelected) => prevSelected.filter((id) => id !== stockId));
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };
  

  // Usually query is done on backend with indexing solutions
  const filteredStocks = applyFilters(stocks, query, filters);
  const paginatedStocks = applyPagination(filteredStocks, page, limit);
  const enableBulkOperations = selectedStocks.length > 0;
  const selectedSomeStocks = selectedStocks.length > 0 && selectedStocks.length < stocks.length;
  const selectedAllStocks = selectedStocks.length === stocks.length;

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Box p={2}>
        <Box
          display="flex"
          alignItems="center"
        >
          <TextField
            className={classes.queryField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon
                    fontSize="small"
                    color="action"
                  >
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            onChange={handleQueryChange}
            placeholder="Search products"
            value={query}
            variant="outlined"
          />
          <Box flexGrow={1} />
          <TextField
            label="Sort By"
            name="sort"
            onChange={handleSortChange}
            select
            SelectProps={{ native: true }}
            value={sort}
            variant="outlined"
          >
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
        <Box
          mt={3}
          display="flex"
          alignItems="center"
        >
          <TextField
            className={classes.categoryField}
            label="Category"
            name="category"
            onChange={handleCategoryChange}
            select
            SelectProps={{ native: true }}
            value={filters.category || 'all'}
            variant="outlined"
          >
            {categoryOptions.map((categoryOption) => (
              <option
                key={categoryOption.id}
                value={categoryOption.id}
              >
                {categoryOption.name}
              </option>
            ))}
          </TextField>
          <TextField
            className={classes.availabilityField}
            label="Availability"
            name="availability"
            onChange={handleAvailabilityChange}
            select
            SelectProps={{ native: true }}
            value={filters.availability || 'all'}
            variant="outlined"
          >
            {avalabilityOptions.map((avalabilityOption) => (
              <option
                key={avalabilityOption.id}
                value={avalabilityOption.id}
              >
                {avalabilityOption.name}
              </option>
            ))}
          </TextField>
          <FormControlLabel
            className={classes.stockField}
            control={(
              <Checkbox
                checked={!!filters.inStock}
                onChange={handleStockChange}
                name="inStock"
              />
            )}
            label="In Stock"
          />
          <FormControlLabel
            className={classes.shippableField}
            control={(
              <Checkbox
                checked={!!filters.isShippable}
                onChange={handleShippableChange}
                name="Shippable"
              />
            )}
            label="Shippable"
          />
        </Box>
      </Box> */}
      {/* {enableBulkOperations && (
        <div className={classes.bulkOperations}>
          <div className={classes.bulkActions}>
            <Checkbox
              checked={selectedAllProducts}
              indeterminate={selectedSomeProducts}
              onChange={handleSelectAllProducts}
            />
            <Button
              variant="outlined"
              className={classes.bulkAction}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              className={classes.bulkAction}
            >
              Edit
            </Button>
          </div>
        </div>
      )} */}
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAllProducts}
                    indeterminate={selectedSomeProducts}
                    onChange={handleSelectAllProducts}
                  />
                </TableCell> */}
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
                  Preço Alvo/ Valuation
                </TableCell>
                <TableCell align="right">
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedStocks.map((stock) => {
                const isStockSelected = selectedStocks.includes(stock.id);

                return (
                  <TableRow
                    hover
                    key={stock.id}
                    selected={isStockSelected}
                  >
                    {/* <TableCell padding="checkbox">
                      <Checkbox
                        checked={isStockSelected}
                        onChange={(event) => handleSelectOneStock(event, stock.id)}
                        value={isStockSelected}
                      />
                    </TableCell> */}
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
