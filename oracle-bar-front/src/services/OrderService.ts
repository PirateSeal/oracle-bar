import { orderCocktails, newOrder, getAllOrders, deliverOrder,  } from '@/api/OrderApi';
import  { CocktailToOrder }  from '@/models/Order';
import TablePeople from '@/models/Table';

export default class OrderService{
    async createOrder(tablePeople: TablePeople){
        const commandeId = await newOrder(tablePeople);
        localStorage.setItem("commandeId", commandeId);
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

}