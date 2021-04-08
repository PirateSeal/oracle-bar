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