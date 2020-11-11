import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Button,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));

function Features({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="overline"
          color="secondary"
          align="center"
        >
          Explore o Kalan IA
        </Typography>
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
        >
          Mais do que um simples robo
        </Typography>
        <Box mt={8}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <Box display="flex">
                <Avatar className={classes.avatar}>
                  01
                </Avatar>
                <Box ml={2}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    color="textPrimary"
                  >
                    Utiliza IA e ML
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                  >
                    O Kalan utiliza de IA e ML para analisar noticias e sentir o "humor" do mercado.
                    Dizendo qual o melhor momento para realizar para realizar uma compra
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <Box display="flex">
                <Avatar className={classes.avatar}>
                  02
                </Avatar>
                <Box ml={2}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    color="textPrimary"
                  >
                    Valuation
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                  >
                    Para os investidores de longo prazo, o kalan tem uma area especializada onde seu algoritmo
                    analisa qual é o preço alvo dos ativos escolhidos
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <Box display="flex">
                <Avatar className={classes.avatar}>
                  03
                </Avatar>
                <Box ml={2}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    color="textPrimary"
                  >
                    Traders e investidores
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    gutterBottom
                  >
                    Perfeito tanto para traders quanto pra investidores.
                  </Typography>
                  {/* <Button
                    variant="outlined"
                    component="a"
                    href="https://sketch.cloud/s/q4a8e"
                    target="_blank"
                  >
                    Teste aqui
                  </Button> */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

Features.propTypes = {
  className: PropTypes.string
};

export default Features;
