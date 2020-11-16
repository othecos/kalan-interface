import moment from 'moment'

export const parseDate = (date)=>{
  let parsedDate = moment(date).format('DD/MM/YYYY')
  return parsedDate
}
