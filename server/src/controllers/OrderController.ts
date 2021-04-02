import ErrorHandler from "./ErrorHandler";
import PeopleService from "../services/OrderService";
import { CreateOrderDTO } from "../dtos/createOrderDTO";
import { OrderDTO } from "../dtos/orderDTO";

class OrderController {
  private _service = PeopleService;

  defaultMethod() {
    throw new ErrorHandler(501, "Not implemented method");
  }

  async CreateOne(model: CreateOrderDTO) {
    return await this._service.CreateOne(model);
  }

  async UpdateOne(model: OrderDTO) {
    return await this._service.UpdateOne(model);
  }
}

export = new OrderController();
