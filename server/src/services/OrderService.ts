import { CreateOrderDTO } from "../dtos/createOrderDTO";
import { OrderDTO } from "../dtos/orderDTO";
import { Order } from "../models/Order";

export default new (class OrderService {
  public async CreateOne(model: CreateOrderDTO): Promise<OrderDTO> {
    return await Order.create({
      PeopleName: model.PeopleName,
      TableInfo: model.TableInfo,
      Complete: model.Complete,
    });
  }

  public async FetchAll(): Promise<OrderDTO[]> {
    return await Order.findAll();
  }

  public async FetchById(id: number): Promise<OrderDTO> {
    return await Order.findByPk(id);
  }

  public async UpdateOne(
    id: number,
    model: OrderDTO
  ): Promise<[number, Order[]]> {
    return await Order.update(
      {
        PeopleName: model.PeopleName,
        TableInfo: model.TableInfo,
        Complete: model.Complete,
      },
      { where: { ID: id } }
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
