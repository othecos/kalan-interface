import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import {
  Avatar,
  Button,
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import LockIcon from '@material-ui/icons/Lock';
import Page from 'src/components/Page';
import Logo from 'src/components/Logo';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 80
  },
  backButton: {
    marginLeft: theme.spacing(2)
  },
  card: {
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  icon: {
    backgroundColor: colors.green[500],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

function LoginView() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmitSuccess = () => {
    // history.push('/app');
  };

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Container maxWidth="md">
        <Box
          mb={8}
          display="flex"
          alignItems="center"
        >
          <RouterLink to="/">
            <Logo   />
          </RouterLink>
          <Button
            component={RouterLink}
            to="/"
            className={classes.backButton}
          >
            Voltar
          </Button>
        </Box>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Avatar className={classes.icon}>
              <LockIcon fontSize="large" />
            </Avatar>
            <Typography
              variant="h2"
              color="textPrimary"
            >
              Login
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
            >
              Faça o login para acessar a plataforma
            </Typography>
            <Box mt={3}>
              <LoginForm onSubmitSuccess={handleSubmitSuccess} />
            </Box>
            <Box my={2}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              to="/register"
              variant="body2"
              color="textSecondary"
            >
              Registrar nova conta
            </Link>
          </CardContent>
          <CardMedia
            className={classes.media}
            image="/static/images/auth.png"
            title="Cover"
          >
            <Typography
              color="inherit"
              variant="subtitle1"
            >
               &quot;Regra número 1: nunca perca dinheiro.
               <br></br>
               Regra numero 2: nunca se esqueça da regra numero 1.&quot;
            </Typography>
            <Box
              alignItems="center"
              display="flex"
              mt={3}
            >
              <Avatar
                alt="Person"
                src={`${process.env.PUBLIC_URL}/static/images/avatars/avatar_buffet.jpg`}
              />
              <Box ml={3}>
                <Typography
                  color="inherit"
                  variant="body1"
                >
                  Buffet, Warren
                </Typography>
                <Typography
                  color="inherit"
                  variant="body2"
                >
                  Diretor executivo da Berkshire Hathaway
                </Typography>
              </Box>
            </Box>
          </CardMedia>
        </Card>
      </Container>
    </Page>
  );
}

export default LoginView;
