import {
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Order } from "./Order";
import { Cocktail } from "./Cocktail";

@Table({ tableName: "CocktailOrderList" })
export class CocktailOrderList extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  ID: number;

  @ForeignKey(() => Order)
  @Column
  OrderID: number;

  @ForeignKey(() => Cocktail)
  @Column
  CocktailID: number;

  @Column
  Delivered: boolean;

  @Column
  Ready: boolean;

  @Column
  OrderedAt: Date;
}
