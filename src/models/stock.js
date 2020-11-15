import { isNaN, isNull } from "lodash"
import { toCurrency } from "src/utils/currency"
import { CURRENCY } from "./app"
import { colors } from '@material-ui/core';
class StockFundamentus {
  net_debt = 0
  pl = 0
  div_yield = 0
  growth_rate = 0
  constructor() {
  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data.net_debt)) this.net_debt = data.net_debt
      if (!isNull(data.pl)) this.pl = data.pl
      if (!isNull(data.div_yield)) this.div_yield = data.div_yield
      if (!isNull(data.growth_rate)) this.growth_rate = data.growth_rate
    }
  }
  toJSON() {
    let obj = {
      net_debt: toCurrency(this.net_debt),
      pl: toCurrency(this.pl),
      div_yield: this.div_yield,
      growth_rate: this.growth_rate
    }
    return obj
  }
}
class StockValuation {
  value = 0
  status
  constructor() {

  }
  setDataFromDB(data) {
    if (data) {
      if (!isNull(data.value)) this.value = data.value
      if (!isNull(data.status)) this.status = data.status
    }
  }
  toJSON() {
    let obj = {
      value: toCurrency(this.value),
      status: this.status
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
  href = 'app/analysis/stocks/'
  color = colors.cyan['500']
  fundamentus = new StockFundamentus()
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
      if (!isNull(data.fundamentus)){
         this.fundamentus.setDataFromDB(data.fundamentus)
        }
      if (!isNull(data.valuation)) {
        this.valuation.setDataFromDB(data.valuation)
      }
    }
  }
  toPreview() {

  }
  toListItem() {

  }
  toListPreviewItem(){
    let obj = {
      key: `item_${this._id}`,
      name: this.name,
      ticker: this.ticker,
      href: this.href
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
      fundamentus: this.fundamentus.toJSON(),
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
