import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  Divider,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axiosMock';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function Keywords({keywords,className,...rest}) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoice, setInvoice] = useState(null);

  return (
    <Page
      className={classes.root}
      title="Keywords"
    >
      <Container maxWidth="lg">
        <Box my={2}>
        </Box>
      </Container>
    </Page>
  );
}

Keywords.propTypes = {
  className: PropTypes.string,
  keywords: PropTypes.array.isRequired
}; 
export default Keywords;
