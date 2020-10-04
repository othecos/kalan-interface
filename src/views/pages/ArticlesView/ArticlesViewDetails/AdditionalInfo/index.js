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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function AdditionalInfo() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoice, setInvoice] = useState(null);

  if (!invoice) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Invoice Details"
    >
      <Container maxWidth="lg">
        <Box my={2}>
          <Divider />
        </Box>
      </Container>
    </Page>
  );
}

export default AdditionalInfo;
