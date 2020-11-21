import { isNull, isUndefined } from "lodash"
import { numberToFixed } from "src/utils/math"
import { trimEllpsis } from "src/utils/string"
import { KeyLabelPair } from "./app"

class ArticleTitle {
  href = ''
  text = ''
  constructor() {

  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data.href)) this.href = data.href
      if (!isNull(data.text)) this.text = data.text
    }
  }
  toJSON() {
    let obj = {
      href: this.href,
      text: this.text
    }
    return obj
  }
}
class ArticleKeywordsSentiments {
  score = ''
  label = ''
  constructor() {

  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data.score)) this.score = data.score
      if (!isNull(data.label)) this.label = data.label
    }
  }
  toJSON() {
    let obj = {
      score: this.score,
      label: this.label
    }
    return obj
  }
}
class ArticleKeywords {
  sentiment = new ArticleKeywordsSentiments()
  text = ''
  relevance = 0
  count = 0
  constructor() {

  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data.sentiment)) this.sentiment.setDataFromDB(data.sentiment)
      if (!isNull(data.text)) this.text = data.text
      if (!isNull(data.relevance)) this.relevance = data.relevance
      if (!isNull(data.count)) this.count = data.count
    }
  }
  toJSON() {
    let obj = {
      sentiment: this.sentiment.toJSON(),
      text: this.text,
      relevance: this.relevance,
      count: this.count
    }
    return obj
  }

}
class ArticleMetadata {
  datetime = ''
  source = ''
  query = ''
  constructor() {

  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data.datetime)) this.datetime = data.datetime
      if (!isNull(data.source)) this.source = data.source
      if (!isNull(data.query)) this.query = data.query
    }
  }
  toJSON() {
    let obj = {
      datetime: this.datetime,
      source: this.source,
      query: this.query,
    }
    return obj
  }
}

class ArticleScore {
  value = -2
  label = 'Não analisado'
  terms = []
  sector = new KeyLabelPair()
  color = 'action'
  constructor() {
    this.sector.setData({
      key: 'bank',
      label: 'Bancário'
    })
  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data.value)) {
        this.value = data.value
        switch (this.value) {
          case -2:
            this.color = 'action'
            break;
          case -1:
            this.color = 'error'
            break;
          case 0:
            this.color = 'secondary'
            break;
          case 1:
            this.color = 'success'
            break;
        }
      }
      if (!isNull(data.label)) this.label = data.label
      if (!isNull(data.terms)) this.terms = data.terms
    }
  }
  toJSON() {
    let obj = {
      value: this.value,
      label: this.label,
      terms: this.terms,
      sector: this.sector.toJSON(),
      color: this.color
    }
    return obj
  }
}
export class Article {
  _id = ''
  title = new ArticleTitle()
  resume = ''
  metadata = new ArticleMetadata()
  score = new ArticleScore()
  keywords = []
  constructor() {

  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data._id)) this._id = data._id
      if (!isNull(data.resume)) this.resume = data.resume
      if (!isNull(data.title)) this.title.setDataFromDB(data.title)
      if (!isNull(data.metadata)) this.metadata.setDataFromDB(data.metadata)
      if (!isNull(data.score)) this.score.setDataFromDB(data.score)
      if (!isNull(data.keywords) && Array.isArray(data.keywords)) {
        data.keywords.forEach((keyword) => {
          let articleKeywords = new ArticleKeywords()
          articleKeywords.setDataFromDB(keyword)
          this.keywords.push(articleKeywords)
        })
      }
    }
  }

  toListItem() {
    let obj = {
      _id: this._id,
      title: this.title.toJSON(),
      metadata: this.metadata.toJSON(),
      resume: this.resume,
      score: this.score.toJSON(),
    }
    return obj
  }
  toPreview() {
    let obj = {
      _id: this._id,
      title: this.title.toJSON(),
      metadata: this.metadata.toJSON(),
      resume: this.resume,
      score: this.score.toJSON(),
    }
    return obj
  }
  toDetail() {
    let obj = {
      header: {
        title: trimEllpsis(this.title.text, 30),
        score: this.score.toJSON()
      },
      article: {
        title: this.title.toJSON(),
        resume: this.resume
      },
      sentiments: {
        title: this.title.toJSON(),
        score: this.score.toJSON()
      },
      keywords: this.keywords.map((keyword) => keyword.toJSON())
    }
    return obj
  }
  toDetailPreview() {

  }

}
export class ArticleGraph {
  colors = []
  data= []
  labels = []
  constructor() {
  }
  setDataFromDB(data) {
    if(data){
      if(!(isUndefined(data.labels) || isNull(data.labels)) ) this.labels = data.labels
      if(!(isUndefined(data.data) || isNull(data.data))) this.data = data.data
      if(!(isUndefined(data.colors) || isNull(data.colors))) this.colors = data.colors
  }
  }
  toJSON() {
    let obj = {
      title: 'Sentimento da noticias',
      datasets: [
        {
          data: this.data.map((d)=> numberToFixed(d)),
          backgroundColor: this.colors,
        }
      ],
      labels: this.labels
    }
    return obj
  }
}
