export class Criteria{
  public criterionName: string
  public weighting: number
  public id:number
  public constructor(criterionName: string, weighting: number, id:number){
    this.criterionName = criterionName
    this.weighting = weighting
    this.id = id
  }
}

export class Item{
  public itemName: string
  public attributes:attribute[]
  public constructor(itemName: string, attributes:attribute[]){
    this.itemName = itemName
    this.attributes = attributes
  }
}
export type attribute = {attributeName:string, value:number}
export type tableCreator = {tableName: string, attributes: Criteria}
export type tableInserter = {tableName: string, attributes: string, values: string}
