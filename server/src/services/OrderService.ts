import { OrderDTO } from "../dtos/Order/OrderDTO";
import { CreatedOrderDTO } from "../dtos/Order/CreatedOrderDTO";
import { Order } from "../models/Order";
import { OrderNewCocktailsDTO } from "../dtos/Order/OrderNewCocktailsDTO";
import { CocktailOrderList } from "../models/CocktailOrderList";
import { Op } from "sequelize";

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

  public async GetByTable(tableId: number): Promise<OrderDTO[]> {
    return await Order.findAll({
      where: {
        TableID: {
          [Op.eq]: tableId
        }
      }
    });
  }


  public async AddCocktailToCommand(model: OrderNewCocktailsDTO) {
 
    model.cocktails.forEach(async (c) => {
      for(let i = 1; i <= c.quantity; i++)
      
        await CocktailOrderList.create({
          OrderID: model.orderId,
          CocktailID: c.cocktailId,
          Delivered: false,
          Ready: false,
          OrderedAt: new Date(Date.now())
        })
    })
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
