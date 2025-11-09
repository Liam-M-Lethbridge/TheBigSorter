export class Criteria{
  public criterion_name: string
  public weighting: number
  public id:number
  public constructor(criterion_name: string, weighting: number, id:number){
    this.criterion_name = criterion_name
    this.weighting = weighting
    this.id = id
  }
}
export type tableCreator = {tableName: string, attributes: Criteria}
export type tableInserter = {tableName: string, attributes: string, values: string}
