export const CURRENCY ='R$'

export class KeyLabelPair{
  label = ''
  key = ''
  constructor(){

  }
  setData(data){
    if(data){
      if(data.label) this.label = data.label
      if(data.key) this.key = data.key
    }
  }
  toJSON(){
    let obj = {
      key: this.key,
      label: this.label
    }
    return obj
  }
}
