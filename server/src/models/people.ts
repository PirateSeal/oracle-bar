import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne } from 'sequelize-typescript'
import { Location } from './Location'

@Table({tableName: "people"})
export class People extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: string

  @Column
  name: string

  @HasOne(() => Location, "FK_People_TableRef")
  tableRef: Location
}
