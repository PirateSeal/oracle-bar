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
            Delivered: {
                [Op.eq] : false
            }
        }
    });
  }

  public async FetchByOrder(orderId: number): Promise<CocktailOrderList[]> {
    return await CocktailOrderList.findAll({
        where: {
            OrderId: {
                [Op.eq] : orderId
            }
        }
    });
  }

})();
