import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { CocktailOrderList } from "./CocktailOrderList";

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

  @HasMany(() => CocktailOrderList)
  Cocktails: Cocktail[]
}
