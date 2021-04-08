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
            delivered: {
                [Op.eq] : false
            }
        }
    });
  }

})();
