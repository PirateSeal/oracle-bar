import { createAsync } from '@/api/CocktailApi';
import { PeopleOrder } from '@/models/peopleOrder';

export default class OrderService{

    async create(order: PeopleOrder) {
        createAsync(order);
    }
}