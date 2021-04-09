import { orderCocktails, newOrder, getAllOrders, deliverOrder, getBills } from '@/api/OrderApi';
import  { CocktailToOrder }  from '@/models/Order';
import {TablePeople} from '@/models/Table';

export default new class OrderService{
    
    
    async createOrder(tablePeople: TablePeople) {
        const commandeId = await newOrder(tablePeople);
        localStorage.setItem("pseudo", tablePeople.PeopleName);

        localStorage.setItem("commandeId", commandeId.order.ID);
        return commandeId.order.ID;
    }

    async order(order: CocktailToOrder) {
        await orderCocktails(order);
    }
    
    async findAllOrders(){
        const orders = await getAllOrders();
        return orders;
    }

    async wholeOrderReady(commandeId: number){
        await deliverOrder(commandeId);
    }

    async getAll() {
        return await getAllOrders();
    }

    async getBills(tableId: number) {
        return await getBills(tableId)
    }


}