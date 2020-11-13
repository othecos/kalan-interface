import React, {
  useState,
  useEffect
} from 'react';
import Cookies from 'js-cookie';
import {
  Box,
  Button,
  Paper,
  Portal,
  Typography,
  makeStyles
} from '@material-ui/core';
import useSettings from 'src/hooks/useSettings';
import { THEMES } from 'src/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 420,
    position: 'fixed',
    top: 0,
    right: 0,
    margin: theme.spacing(3),
    outline: 'none',
    zIndex: 2000,
    padding: theme.spacing(2)
  }
}));

function SettingsNotification() {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const { saveSettings } = useSettings();

  const handleSwitch = () => {
    saveSettings({ theme: THEMES.LIGHT });
    Cookies.set('settingsUpdated', 'true');
    setOpen(false);
  };

  const handleClose = () => {
    Cookies.set('settingsUpdated', 'true');
    setOpen(false);
  };

  useEffect(() => {
    const settingsUpdated = Cookies.get('settingsUpdated');

    if (!settingsUpdated) {
      setOpen(true);
    }
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Paper
        className={classes.root}
        elevation={3}
      >
        <Typography
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          Atualização das configurações
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
        >
          Nós atualizamos automaticamente suas configurações
          Você pode mudar as configurações a qualquer momento no painel de configurações
        </Typography>
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
        >
          <Button onClick={handleClose}>
            Fechar
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleSwitch}
          >
            Switch
          </Button>
        </Box>
      </Paper>
    </Portal>
  );
}

export default SettingsNotification;
