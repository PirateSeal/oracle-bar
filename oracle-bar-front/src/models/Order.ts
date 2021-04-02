import { CocktailQuantity } from '@/models/Cocktail'

export interface CocktailToOrder {
    oderId: number;
    cocktails: Array<CocktailQuantity>;
};

export interface Order {
    orderId: number;
    tableId: number;
    paid: boolean;
    peopleName: string;
};
