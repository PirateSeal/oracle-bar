import axiosInstance from '../axios';
import { CocktailToOrder }  from "@/models/Order";
import { TablePeople } from '../models/Table';

export const orderCocktails = async (order: CocktailToOrder) => (await axiosInstance.post('/order/command', order)).data
export const newOrder = async (tablePeople: TablePeople) => (await axiosInstance.post('/order', tablePeople)).data
export const deliverOrder = async (commandeId: number) => (await axiosInstance.post('/order/deliver', commandeId)).data
export const getAllOrders = async () => (await axiosInstance.get('/order')).data;

export const getBills = async (tableId: number) => (await axiosInstance.get(`/order/bill/${tableId}`)).data;
export const complete = async (orderId: number) => (await axiosInstance.put(`order/complete/${orderId}`)).data;