export interface CocktailQuantity {
    cocktailId: number,
    quantity: number
}

export interface Cocktail {
    ID: number;
    name: string;
    price: number;
    description: string;
    photo: string;
    quantity:number
}

export interface OrderToDeliver{
    orderId: number;
    orderPersonName: string;
    cocktails: Array<Cocktail>
}