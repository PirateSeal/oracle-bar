import { CreateOrderDTO } from "../dtos/createOrderDTO";
import { OrderDTO } from "../dtos/orderDTO";
import { Order } from "../models/Order";

export default new (class OrderService {
  public async CreateOne(model: CreateOrderDTO) {
    return await Order.create({
      PeopleName: model.PeopleName,
      TableInfo: model.TableInfo,
      Complete: model.Complete,
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
        PeopleName: model.PeopleName,
        TableInfo: model.TableInfo,
        Complete: model.Complete,
      },
      { where: { id: model.ID } }
    );
  }

  public DeleteOne(id: number) {
    return Order.destroy({
      where: {
        ID: id,
      },
    });
  }
})();
