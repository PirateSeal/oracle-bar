import {
  AutoIncrement,
  Column,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Order } from "./Order";
import { Cocktails } from "./Cocktails";

@Table({ tableName: "cocktails_order_list" })
export class CocktailsOrderList extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @HasOne(() => Order, "FK_Order_CocktailOrderList")
  order: Order;

  @HasOne(() => Cocktails, "FK_Cocktails_CocktailOrderList")
  cocktail: Cocktails;

  @Column
  delivered: boolean;

  @Column
  ready: boolean;

  @Column
  orderedat: Date;
}
