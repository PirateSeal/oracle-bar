import axiosInstance from '../axios';
import { CocktailToOrder }  from "@/models/Order";
import TablePeople from '@/models/Table';

export const orderCocktails = async (order: CocktailToOrder) => (await axiosInstance.post('/order/add', order)).data
export const newOrder = async (tablePeople: TablePeople) => (await axiosInstance.post('/order/create', tablePeople)).data
export const deliverOrder = async (commandeId: number) => (await axiosInstance.post('/order/deliver', commandeId)).data
export const getAllOrders = async () => (await axiosInstance.get('/order')).data