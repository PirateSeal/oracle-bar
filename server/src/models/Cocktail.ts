import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({ tableName: "Cocktail" })
export class Cocktail extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  ID: number;

  @Column
  Name: string;

  @Column
  Price: number;

  @Column
  Photo: string;

  @Column
  Description: string;
}
