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

function ArticlesView() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        console.log('hi');
        let response = await axios.get('/analysis/news/')
        console.log(response);
        let docs = response.data
        setArticles(docs)
      }catch(err){
        console.error("Error response:");
        console.error(err.response);    // ***
        console.error(err.response.status);  // ***
        console.error(err.response.headers); // ***
      }
     
    }
    fetchData();
  }, [])

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Noticias"
    >
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <Filter />
        </Box>
        <Box mt={6}>
        <Results articles={articles} />
        </Box>
      </Container>
    </Page>
  );
}

export default ArticlesView;
