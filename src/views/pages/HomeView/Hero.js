import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 200,
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
      transform: 'rotateY(-35deg) rotateX(15deg)',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16]
    }
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  }
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={5}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography
                variant="overline"
                color="secondary"
              >
                Apresentando
              </Typography>
              <Typography
                variant="h1"
                color="textPrimary"
              >
                Kalan IA - Orientador inteligente de compra e vendas de ativos 
              </Typography>
              <Box mt={3}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Um gerador de insights e orientações de trade de ativos do mercado financeiro brasileiro.
                Gerando analises de curto, médio e longo prazo sobre as principais ações com o uso de Inteligencia Artificial e Machine Learning
                </Typography>
              </Box>
              <Box mt={3}>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="secondary"
                    >
                      5+
                    </Typography>
                    <Typography
                      variant="overline"
                      color="textSecondary"
                    >
                      Ativos analisados
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="secondary"
                    >
                      +10.000
                    </Typography>
                    <Typography
                      variant="overline"
                      color="textSecondary"
                    >
                      Usuarios
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
          >
            <Box position="relative">
              <div className={classes.shape}>
                <img
                  alt="Shapes"
                  src="/static/home/shapes.svg"
                />
              </div>
              <div className={classes.image}>
                <img
                  alt="Presentation"
                  src="/static/home/dark-light.png"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
