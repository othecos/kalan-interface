import React, {
  useState,
  useEffect
} from 'react';
import Cookies from 'js-cookie';
import {
  Box,
  Button,
  Link,
  Portal,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    maxWidth: 600,
    position: 'fixed',
    bottom: 0,
    left: 0,
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    outline: 'none',
    zIndex: 2000
  },
  action: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  }
}));

function CookiesNotification() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    Cookies.set('consent', 'true');
    setOpen(false);
  };

  useEffect(() => {
    const consent = Cookies.get('consent');

    if (!consent) {
      setOpen(true);
    }
  }, []);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div className={classes.root}>
        <Typography
          variant="body1"
          color="inherit"
        >
          Nós usamos Cookies para garantir a melhor experiência para você nesse site .
        </Typography>
        <Box
          mt={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            onClick={handleClose}
            variant="contained"
            className={classes.action}
          >
            Eu concordo
          </Button>
        </Box>
      </div>
    </Portal>
  );
}

export default CookiesNotification;
