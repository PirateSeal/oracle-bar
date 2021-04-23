import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Order } from "./Order";

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

  @HasMany(() => Order)
  Orders: Order[];
}
