import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  makeStyles
} from '@material-ui/core';
import { useHistory } from 'react-router';
import Page from 'src/components/Page';
import LoadingScreen from 'src/components/LoadingScreen';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import KeywordsView from './KeywordsView';
import Header from './Header'
import SentimentsView from './SentimentsView';
import ArticleView from './ArticleView';
import { Article } from 'src/models/article';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    height: '100%',
  },
}));

function ArticlesViewDetails(props) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [article, setArticle] = useState(null);
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState('article');
  const { params } = props.match
  const tabs = [
    { value: 'article', label: 'Artigo' },
    { value: 'sentiments', label: 'Sentimentos' },
    { value: 'keywords', label: 'Palavras chave' }
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        let response = await axios.get(`/analysis/news/${id}`)
        if (response.data) {
          const art = new Article()
          art.setDataFromDB(response.data)
          setArticle(art.toDetail())
          console.log(art.toDetail())
        } else {
          return null
        }
      } catch (err) {
        let status = 404
        if (err && err.response && err.response.status) status = err.response.status
        switch (status) {
          case 404:
            history.goBack()
            break;
          default:
            history.goBack()
        }
      }
    }
    if (params && params.detail) {
      fetchData(params.detail);
    } else {
      history.push('/')
    }

  }, [])


  return (
    <Page
      className={classes.root}
      title="Detalhe do artigo"
    >
      <Container
        className={classes.container}
        maxWidth={false}>
        <Header articleTitleShortHand={article ?  article?.header?.title : '...'} score={article?.header.score} />
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            value={currentTab}
            variant="scrollable"
            textColor="secondary"
            className={classes.tabs}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
        </Box>
        <Divider />

        {
          article ?
            <Box mt={3}>
              {currentTab === 'article' && <ArticleView article={article.article} />}
              {currentTab === 'sentiments' && <SentimentsView sentiments={article.sentiments} />}
              {currentTab === 'keywords' && <KeywordsView keywords={article.keywords} />}
            </Box> :
            <Box
              display="flex"
              height="100%"
              alignItems="center"
              justifyContent="center"
            >
              <LoadingScreen></LoadingScreen>
            </Box>
        }
      </Container>
    </Page>
  );
}

export default ArticlesViewDetails;
