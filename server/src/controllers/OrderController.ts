import ErrorHandler from "./ErrorHandler";
import PeopleService from "../services/OrderService";
import { CreateOrderDTO } from "../dtos/createOrderDTO";
import { OrderDTO } from "../dtos/orderDTO";
import { Order } from "../models/Order";

class OrderController {
  private _service = PeopleService;

  defaultMethod() {
    throw new ErrorHandler(501, "Not implemented method");
  }

  async FetchAll(): Promise<OrderDTO[]> {
    return await this._service.FetchAll();
  }

  async FetchById(id: number): Promise<OrderDTO> {
    return await this._service.FetchById(id);
  }

  async CreateOne(model: CreateOrderDTO): Promise<OrderDTO> {
    return await this._service.CreateOne(model);
  }

  async UpdateOne(id: number, model: OrderDTO): Promise<[number, Order[]]> {
    return await this._service.UpdateOne(id, model);
  }
}

export = new OrderController();
