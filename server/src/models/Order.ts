import {
  AutoIncrement,
  Column,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { TableInfo } from "./TableInfo";

@Table({ tableName: "Order" })
export class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  ID: number;

  @Column
  PeopleName: string;

  @Column
  Complete: boolean;

  @HasOne(() => TableInfo, "FK_TableInfo_PeopleOrder")
  TableInfo: TableInfo;
}
