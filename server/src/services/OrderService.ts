import { OrderDTO } from "../dtos/Order/OrderDTO";
import { CreatedOrderDTO } from "../dtos/Order/CreatedOrderDTO";
import { Order } from "../models/Order";

export default new (class OrderService {
  public async FetchAll(): Promise<CreatedOrderDTO[]> {
    return await Order.findAll();
  }

  public async FetchOneById(id: number): Promise<CreatedOrderDTO> {
    return await Order.findByPk(id);
  }

  public async CreateOne(model: OrderDTO): Promise<CreatedOrderDTO> {
    return await Order.create({
      PeopleName: model.PeopleName,
      TableID: model.TableID,
      Complete: model.Complete,
    });
  }

  public async UpdateOneById(
    id: number,
    model: CreatedOrderDTO
  ): Promise<[number, Order[]]> {
    return await Order.update(
      {
        PeopleName: model.PeopleName,
        TableID: model.TableID,
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
