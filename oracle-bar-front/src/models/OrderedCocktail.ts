export default interface OrderedCocktail {
    id: number;
    orderId: number;
    cocktailId: number;
    delivered: boolean;
    ready: boolean;
    orderedAt: Date;
};