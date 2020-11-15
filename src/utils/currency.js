import { isNaN } from "lodash"

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
})

export const toCurrency = (number) =>{
  if(typeof number == 'number'){
    return formatter.format(number) 
  }else if(typeof number == 'string'){
    const formated  = +number
    if(!isNaN(formated)) return formatter.format(number)
  }
  return number
}
