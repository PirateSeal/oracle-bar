import { CocktailOrderList } from "../../models/CocktailOrderList";
import { CocktailDTO } from "./CocktailDTO";

export class CocktailOrderlDTO {
    public TableName: string;
    public OrderPersonName: string;
    public CocktailName: string;

    public ID: number;

    public OrderID: number;
  
    public CocktailID: number;
  
    public Delivered: boolean;
  
    public Ready: boolean;
  
    public OrderedAt: Date;
}