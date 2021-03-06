import { Op } from "sequelize";
import { Cocktail } from "../models/Cocktail";
import { CocktailOrderList } from "../models/CocktailOrderList";

export default new (class CocktailService {
  public async FetchAll(): Promise<Cocktail[]> {
    return await Cocktail.findAll();
  }

  public async FetchAllNotDelivered(): Promise<CocktailOrderList[]> {
    return await CocktailOrderList.findAll({
        where: {
            [Op.and]: [{Delivered: false}]
           
        }
    });
  }

  public async setDelivered(cocktailOrderId: number): Promise<void> {
    let cocktailOrder = (await CocktailOrderList.findByPk(cocktailOrderId));
    cocktailOrder.Delivered = true;
    await cocktailOrder.save()
  }

  public async setReady(cocktailOrderId: number): Promise<void> {
    let cocktailOrder = (await CocktailOrderList.findByPk(cocktailOrderId));
    cocktailOrder.Ready = true;
    await cocktailOrder.save()
  }

  public async FetchByOrder(orderId: number): Promise<CocktailOrderList[]> {
    return await CocktailOrderList.findAll({
        where: {
            [Op.and]: [{OrderID: orderId}]
           
        }
    });
  }

  public async FetchOneById(cocktailId: number): Promise<Cocktail> {
      return await Cocktail.findByPk(cocktailId);
  }

})();
