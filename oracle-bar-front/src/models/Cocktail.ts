export interface CocktailQuantity {
    cocktailId: number,
    quantity: number
}

export interface Cocktail {
    cocktailId: number;
    name: string;
    price: number;
    description: string;
    photo: string;
    quantity:number
}