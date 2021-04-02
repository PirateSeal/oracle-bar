import { CocktailQuantity } from '@/models/Cocktail'

export default interface Order {
    commandeId: number;
    cocktails: Array<CocktailQuantity>;
};
