
export interface CocktailsOrderList {
    id: number;
    commandeId: number;
    cocktailId: number;
    delivered: boolean;
    ready: boolean;
    orderedAt: Date;
};
