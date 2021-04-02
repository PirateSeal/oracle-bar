import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne } from 'sequelize-typescript'
import { People } from './People'

@Table({tableName: "people_order"})
export class PeopleOrder extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: string

    @Column
    price: number

    @Column
    payed: boolean

    @HasOne(() => People, "FK_People_PeopleOrder")
    people: People
}
