import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128
  },
  browseButton: {
    marginLeft: theme.spacing(2)
  }
}));

function CTA({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
        >
          Pronto para testar o Kalan?
        </Typography>
        <Typography
          variant="h1"
          align="center"
          color="secondary"
        >
          Clique aqui e faça sua simulação
        </Typography>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            color="secondary"
            component="a"
            href="https://material-ui.com/store/items/devias-kit-pro"
            variant="contained"
          >
            Ir para dashboard
          </Button>
        </Box>
      </Container>
    </div>
  );
}

CTA.propTypes = {
  className: PropTypes.string
};

export default CTA;
