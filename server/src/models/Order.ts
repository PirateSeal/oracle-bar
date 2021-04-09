import {AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table,} from "sequelize-typescript";
import { CocktailOrderList } from "./CocktailOrderList";
import {TableInfo} from "./TableInfo";

@Table({tableName: "Order"})
export class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    ID: number;

    @Column
    PeopleName: string;

    @Column
    Complete: boolean;

    @ForeignKey(() => TableInfo)
    @Column
    TableID: number;

    @BelongsTo(() => TableInfo)
    TableInfo: TableInfo;

    @HasMany(() => CocktailOrderList)
    CocktailOrders: CocktailOrderList[]
}
