import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';
import GenericMoreButton from 'src/components/GenericMoreButton';
import axios from 'src/utils/axiosMock';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Chart from './Chart';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(3, 2),
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }
}));

function SentimentsGraph({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [sentiments, setSentiments] = useState(null);

  const getSentiments = useCallback(() => {
    axios
      .get('/api/analysis/graph')
      .then((response) => {
        if (isMountedRef.current) {
          setSentiments(response.data.sentiments);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getSentiments();
  }, [getSentiments]);

  if (!sentiments) {
    return null;
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Sentimento das noticias"
      />
      <Divider />
      <Box
        p={3}
        position="relative"
        minHeight={320}
      >
        <Chart data={sentiments} />
      </Box>
      <Divider />
      <Box display="flex">
        {sentiments.labels.map((label, i) => (
          <div
            key={label}
            className={classes.item}
          >
            <Typography
              variant="h4"
              color="textPrimary"
            >
              {sentiments.datasets[0].data[i]}
              %
            </Typography>
            <Typography
              variant="overline"
              color="textSecondary"
            >
              {label}
            </Typography>
          </div>
        ))}
      </Box>
    </Card>
  );
}

SentimentsGraph.propTypes = {
  className: PropTypes.string
};

export default SentimentsGraph;
