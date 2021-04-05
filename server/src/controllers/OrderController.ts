import ErrorHandler from "./ErrorHandler";
import OrderService from "../services/OrderService";
import { CreateOrderDTO } from "../dtos/Order/CreateOrderDTO";
import { OrderDTO } from "../dtos/Order/OrderDTO";
import { Order } from "../models/Order";

class OrderController {
  private _service = OrderService;

  defaultMethod() {
    throw new ErrorHandler(501, "Not implemented method");
  }

  async FetchAll(): Promise<OrderDTO[]> {
    return await this._service.FetchAll();
  }

  async FetchOneById(id: number): Promise<OrderDTO> {
    return await this._service.FetchOneById(id);
  }

  async CreateOne(model: CreateOrderDTO): Promise<OrderDTO> {
    return await this._service.CreateOne(model);
  }

  async UpdateOneById(id: number, model: OrderDTO): Promise<[number, Order[]]> {
    return await this._service.UpdateOneById(id, model);
  }

  async DeleteOneById(id: number): Promise<number> {
    return await this._service.DeleteOneById(id);
  }
}

export = new OrderController();
