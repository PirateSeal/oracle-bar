import {
  AutoIncrement,
  Column,
  HasOne,
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

  @HasOne(() => Order, "FK_Order_CocktailOrderList")
  Order: Order;

  @HasOne(() => Cocktail, "FK_Cocktails_CocktailOrderList")
  Cocktail: Cocktail;

  @Column
  Delivered: boolean;

  @Column
  Ready: boolean;

  @Column
  OrderedAt: Date;
}
