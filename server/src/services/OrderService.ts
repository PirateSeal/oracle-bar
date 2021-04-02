import { CreateOrderDTO } from "../dtos/createOrderDTO";
import { OrderDTO } from "../dtos/orderDTO";
import { Order } from "../models/Order";

export default new (class OrderService {
  public async CreateOne(model: CreateOrderDTO) {
    return await Order.create({
      people_name: model.people_name,
      table_info: model.table_info,
      complete: model.complete,
    });
  }

  public async FetchAll() {
    return await Order.findAll();
  }

  public async FetchById(id: number) {
    return await Order.findByPk(id);
  }

  public async UpdateOne(model: OrderDTO) {
    return await Order.update(
      {
        people_name: model.people_name,
        table_info: model.table_info,
        complete: model.complete,
      },
      { where: { id: model.id } }
    );
  }

  public DeleteOne(id: number) {
    return Order.destroy({
      where: {
        id: id,
      },
    });
  }
})();
