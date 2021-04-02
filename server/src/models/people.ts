import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne } from 'sequelize-typescript'
import { Location } from './Location'

@Table({tableName: "People"})
export class People extends Model<People> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  name: string

  @HasOne(() => Location, "FK_People_TableRef")
  tableRef: Location
}
