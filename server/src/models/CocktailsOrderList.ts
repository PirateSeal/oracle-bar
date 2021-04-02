import {Table, Column, Model, PrimaryKey, HasOne} from 'sequelize-typescript'
import {PeopleOrder} from "./PeopleOrder";
import {Cocktails} from "./Cocktails";

@Table({tableName: "cocktails_order_list"})
export class CocktailsOrderList  extends Model {
    @HasOne(() => PeopleOrder, "FK_PeopleOrder_CocktailOrderList")
    order: PeopleOrder

    @HasOne(() => Cocktails, "FK_Cocktails_CocktailOrderList")
    cocktail: Cocktails

    @Column
    delivered: boolean;

    @Column
    ready: boolean;

    @Column
    orderedat: Date;
}
