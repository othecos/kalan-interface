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
  Grid,
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
      title="Palavras chave"
    >
      <Container maxWidth="lg">
        <Box mt={1} mb={1}>
          <Typography
            variant="subtitle2"
            color="textSecondary"
          >
            Palavras chave
              </Typography>
        </Box>

        <Grid container spacing={2}>
          {keywords.map((keyword, index) => (
            <Grid item key={`keyword_${index}`}>
              <Chip
                variant="outlined"
                label={keyword.text}

              />
            </Grid>

          ))}
        </Grid>

      </Container>
    </Page>
  );
}

Keywords.propTypes = {
  className: PropTypes.string,
  keywords: PropTypes.array
};
Keywords.defaultProps = {
  keywords: []
}
export default Keywords;
