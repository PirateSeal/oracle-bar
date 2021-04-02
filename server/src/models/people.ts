import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement, HasOne } from 'sequelize-typescript'
import { TableRef } from './table'

@Table({tableName: "people"})
class People extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  id: string

  @Column
  name: string

  @HasOne(() => TableRef, "FK_People_TableRef")
  tableRef: TableRef  
}