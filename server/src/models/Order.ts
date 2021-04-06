import {AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table,} from "sequelize-typescript";
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
}
