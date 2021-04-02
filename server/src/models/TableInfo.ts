import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({ tableName: "TableInfo" })
export class TableInfo extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  ID: number;

  @Column
  Number: number;

  @Column
  Location: string;
}
