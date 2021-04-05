import { CreateOrderDTO } from "../dtos/Order/CreateOrderDTO";
import { OrderDTO } from "../dtos/Order/OrderDTO";
import { Order } from "../models/Order";

export default new (class OrderService {
  public async FetchAll(): Promise<OrderDTO[]> {
    return await Order.findAll();
  }

  public async FetchOneById(id: number): Promise<OrderDTO> {
    return await Order.findByPk(id);
  }

  public async CreateOne(model: CreateOrderDTO): Promise<OrderDTO> {
    return await Order.create({
      PeopleName: model.PeopleName,
      TableInfo: model.TableInfo,
      Complete: model.Complete,
    });
  }

  public async UpdateOneById(
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

  public async DeleteOneById(id: number): Promise<number> {
    return await Order.destroy({
      where: {
        ID: id,
      },
    });
  }
})();
