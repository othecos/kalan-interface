import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import Header from './Header';
import Filter from './Filter';
import Results from './Results';
import axios from 'src/utils/axios'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));
function AnalysisSentimentsView({ className, ...rest }) {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try{
        let response = await axios.get('/analysis/news/')
        let docs = response.data
        setArticles(docs)
      }catch(err){
        if(err.response){
          console.error("Error response:");
          console.error(err.response);    // ***
          console.error(err?.response?.status);  // ***
          console.error(err?.response?.headers); // ***
        }
      }
    }
    fetchData();
  }, [])

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Analise de sentimentos"
    >
      <Container maxWidth="lg">
        <Header />
        <Box mt={6}>
          <Results articles={articles}></Results>
        </Box>
      </Container>
    </Page>
  );
}

AnalysisSentimentsView.propTypes = {
  className: PropTypes.string
};

export default AnalysisSentimentsView;