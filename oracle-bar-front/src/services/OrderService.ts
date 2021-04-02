import { createAsync } from '@/api/CocktailApi';
import Order from '@/model/Order';

export default class OrderService{

    async create(order: Order) {
        createAsync(order);
    }
}