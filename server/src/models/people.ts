import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

@Table({tableName: "people"})
class People extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  id: string

  
}