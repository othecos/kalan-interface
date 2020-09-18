import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    '& dt': {
      marginTop: theme.spacing(2)
    }
  }
}));

function FAQS({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          color="textPrimary"
        >
          Perguntas frequentes
        </Typography>
        <Box my={3}>
          <Divider />
        </Box>
        <Grid
          container
          spacing={3}
          component="dl"
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="overline"
              color="secondary"
            >
              Sobre o Kalan
            </Typography>
            <Box mt={6}>
              <dd>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  O que é o Kalan?
                </Typography>
              </dd>
              <dt>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Kalan é um serviço de analise de mercado financeiro que veio para auxiliar os investidores nas tomadas de decisão em suas jornadas financeiras.
                </Typography>
              </dt>
            </Box>
            <Box mt={6}>
              <dd>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Quais as vantagens do serviço?
                </Typography>
              </dd>
              <dt>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Ele oferece uma analise imparcial das noticias do mercado,
                  juntando o conhecimento dos melhores analistas do mercado em um algoritmo de Inteligencia artificial.
                  Conseguindo orientar compras de curto, médio e longo prazo aos seus usuarios.
                </Typography>
              </dt>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="overline"
              color="secondary"
            >
              Publico
            </Typography>
            <Box mt={6}>
              <dd>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Investidores
                </Typography>
              </dd>
              <dt>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Como investidor, voce pode visualizar uma analise completa de valuation para os ativos disponiveis, obtendo nossas recomendações de compra e venda para os ativos a longo prazo. 
                  E, se desejar, visualizar o humor do mercado, para escolhar a melhor hora de iniciar seu investimento.
                </Typography>
              </dt>
            </Box>
            <Box mt={6}>
              <dd>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Traders
                </Typography>
              </dd>
              <dt>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                 Para os traders, oferecemos a visualização das principais noticias relacionadas a cada ativo.
                 E juntamente com a nossa inteligencia articial, conseguimos extrair a tendência do sentimento daquela noticia para com o ativo desejado.
                 Assim criando predições capazes de orientar a tomada de decisao de compra ou venda uma ação
                </Typography>
              </dt>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

FAQS.propTypes = {
  className: PropTypes.string
};

export default FAQS;
