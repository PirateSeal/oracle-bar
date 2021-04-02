import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne } from 'sequelize-typescript'
import { location } from './location'

@Table
export class people extends Model {
  
  @PrimaryKey
  @AutoIncrement
  @Column
  id: string

  @Column
  name: string

  @HasOne(() => location, "FK_People_TableRef")
  tableRef: location  
}