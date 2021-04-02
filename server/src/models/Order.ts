import {
  AutoIncrement,
  Column,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { TableInfo } from "./TableInfo";

@Table({ tableName: "order" })
export class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  people_name: string;

  @Column
  complete: boolean;

  @HasOne(() => TableInfo, "FK_TableInfo_PeopleOrder")
  table_info: TableInfo;
}
