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
import axiosMock from 'src/utils/axiosMock';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Chart from './Chart';
import { ArticleGraph } from 'src/models/article';

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

  // const getSentiments = useCallback(() => {
  //   axiosMock
  //     .get('/api/analysis/graph')
  //     .then((response) => {
  //       if (isMountedRef.current) {
  //         setSentiments(response.data.sentiments);
  //       }
  //     });
  // }, [isMountedRef]);
  const getSentiments = useCallback(async () => {
    try{
      const response = await axios.get('/analysis/news/graph')
      if (isMountedRef.current && response.data) {
        const graph = new ArticleGraph()
        graph.setDataFromDB(response.data)
        setSentiments(graph.toJSON());
      }
    }catch(err){
      console.error(err);
    }
   
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
        title={sentiments.title}
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
