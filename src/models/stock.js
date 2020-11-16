import { isNaN, isNull } from "lodash"
import { toCurrency } from "src/utils/currency"
import { CURRENCY } from "./app"
import { colors } from '@material-ui/core';
class StockValuationPremisses {
  CAPM =  0
  beta = 0
  betaDetails = ""
  divPerShare = 0
  growthRate = "0%"
  riskFree = "0%"
  constructor() {
  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data.CAPM)) this.CAPM = data.CAPM
      if (!isNull(data.beta)) this.beta = data.beta
      if (!isNull(data.betaDetails)) this.betaDetails = data.betaDetails
      if (!isNull(data.divPerShare)) this.divPerShare = data.divPerShare
      if (!isNull(data.growthRate)) this.growthRate = data.growthRate
      if (!isNull(data.riskFree)) this.riskFree = data.riskFree
    }
  }
  toJSON() {
    let obj = {
      CAPM: this.CAPM,
      beta: this.beta,
      betaDetails: this.betaDetails,
      divPerShare: toCurrency(this.divPerShare),
      growthRate: this.growthRate,
      riskFree: this.riskFree,
    }
    return obj
  }
}
class StockValuation {
  value = 0
  status
  premisses = new StockValuationPremisses()
  constructor() {

  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data.value)) this.value = data.value
      if (!isNull(data.status)) this.status = data.status
      if (!isNull(data.premisses)) {
          this.premisses.setDataFromDB(data.premisses)
      }
    }
  }
  toJSON() {
    let obj = {
      value: toCurrency(this.value),
      status: this.status,
      premisses: this.premisses.toJSON()
    }
    return obj
  }
}
class StockDividend{
  period = 2019
  yield = '0%'
  constructor(){

  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data.period)) this.period = data.period
      if (!isNull(data.yield)) this.yield = data.yield
    }
  }
  toJSON() {
    let obj = {
      period: this.period,
      yield: this.yield
    }
    return obj
  }
}
export class Stock {
  _id
  ticker = ''
  category = ''
  date = ''
  price = 0
  name = ''
  dividend = new StockDividend()
  href = 'app/analysis/stocks/'
  color = colors.cyan['500']
  valuation = new StockValuation()
  constructor() {
   
  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data._id)) this._id = data._id
      if (!isNull(data.ticker)) {
        this.ticker = data.ticker
        this.href += data.ticker
      }
      if (!isNull(data.name)) this.name = data.name
      if (!isNull(data.category)) this.category = data.category
      if (!isNull(data.date)) this.date = data.date
      if (!isNull(data.price)) this.price = data.price
      if (!isNull(data.dividend)){
        this.dividend.setDataFromDB(data.dividend)
      }
      if (!isNull(data.valuation)) {
        this.valuation.setDataFromDB(data.valuation)
      }
    }
  }
  toPreview() {
    let obj = {
      key: `item_${this._id}`,
      name: this.name,
      ticker: this.ticker,
      href: this.href
    }
    return obj
  }
  toListItem() {
    let obj = {
      key: `item_${this._id}`,
      name: this.name,
      ticker: this.ticker,
      href: this.href,
      price: toCurrency(this.price),
      valuation: this.valuation.toJSON()
    }
    return obj
  }
  toDetail() {
    let obj = {
      key: `item_${this._id}`,
      name: this.name,
      ticker: this.ticker,
      href: this.href,
      date: this.date,
      price: toCurrency(this.price),
      dividend: this.dividend.toJSON(),
      fundamentus: this.valuation.premisses.toJSON(),
      valuation: this.valuation.toJSON(),
      diff: {
        value: this.getDiffPercentage(this.price,this.valuation.value),
        label: `${this.getDiffPercentage(this.price,this.valuation.value).toFixed(2)}%`
      }
    }
    return obj
  }
  getDiffPercentage(price,valuation){
    try{
      const diff = valuation - price
      const diffPercentage = (diff / price) * 100
      if(!isNaN(diff) && !isNaN(diffPercentage)) return diffPercentage
      else return 0
    }catch(err){
      return 0
    }
    
  }
}
