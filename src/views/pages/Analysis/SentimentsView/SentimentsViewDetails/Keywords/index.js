import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Chip,
  Container,
  Divider,
  makeStyles,
  Typography
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

function Keywords({ keywords, className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();

  return (
    <Page
      className={classes.root}
      title="Keywords"
    >
      <Container maxWidth="lg">
        <Box mt={3}>
          <Typography
            variant="subtitle2"
            color="textSecondary"
          >
            Technology Stack
              </Typography>
          <Box mt={1}>
            {keywords.map((keyword) => (
              <Chip
                key={keyword}
                variant="outlined"
                label={keyword}
              />
            ))}
          </Box>
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
