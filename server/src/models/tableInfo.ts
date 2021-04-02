import {AutoIncrement, Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table({tableName: "table_info"})
export class TableInfo extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    number: number;

    @Column
    location: string;
}
