import ErrorHandler from "./ErrorHandler";
import OrderService from "../services/OrderService";
import { OrderDTO } from "../dtos/Order/OrderDTO";
import { CreatedOrderDTO } from "../dtos/Order/CreatedOrderDTO";
import { Order } from "../models/Order";

class OrderController {
  private _service = OrderService;

  defaultMethod() {
    throw new ErrorHandler(501, "Not implemented method");
  }

  async FetchAll(): Promise<CreatedOrderDTO[]> {
    return await this._service.FetchAll();
  }

  async FetchOneById(id: number): Promise<CreatedOrderDTO> {
    return await this._service.FetchOneById(id);
  }

  async CreateOne(model: OrderDTO): Promise<CreatedOrderDTO> {
    return await this._service.CreateOne(model);
  }

  async UpdateOneById(
    id: number,
    model: CreatedOrderDTO
  ): Promise<[number, Order[]]> {
    return await this._service.UpdateOneById(id, model);
  }

  async DeleteOneById(id: number): Promise<number> {
    return await this._service.DeleteOneById(id);
  }
}

export = new OrderController();
