import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({ tableName: "cocktails" })
export class Cocktails extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  price: number;

  @Column
  photo: string;

  @Column
  Description: string;
}
