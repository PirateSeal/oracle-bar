import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: "Location"})
export class Location extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;
}
