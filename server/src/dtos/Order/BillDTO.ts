export class BillDTO  {
    orderID: number;
    orderPeopleName: string;
    cocktails: {
        name: string,
        price: number,
        quantity: number
    }[]
}