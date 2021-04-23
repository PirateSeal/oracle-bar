import { Cocktail } from "./Cocktail";

export interface Bill{
    orderId: number;
    orderPersonName: string;
    cocktails: Array<Cocktail>
}
