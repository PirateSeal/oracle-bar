import ErrorHandler from "./ErrorHandler";
import OrderService from "../services/OrderService";
import { OrderDTO } from "../dtos/Order/OrderDTO";
import { Order } from "../models/Order";
import { TableInfo } from "../models/TableInfo";
import { CocktailDTO } from "../dtos/Cocktail/CocktailDTO";
import CocktailService from "../services/CocktailService";
import { CocktailOrderlDTO } from "../dtos/Cocktail/CocktailOrderDTO";
import { Cocktail } from "../models/Cocktail";

class CocktailController {
  private _service = CocktailService;

  defaultMethod() {
    throw new ErrorHandler(501, "Not implemented method");
  }

  async FetchAll(): Promise<CocktailDTO[]> {
    return await this._service.FetchAll();
  }

  async FetchNotDelivered(): Promise<CocktailOrderlDTO[]> {
    let cocktails = await this._service.FetchAllNotDelivered();
    
    let fullDtoCocktails: CocktailOrderlDTO[] = [];
    for(let c of cocktails){
      let order = await Order.findByPk(c.OrderID);
      let table = await TableInfo.findByPk(order.TableID);
      let cocktail = await Cocktail.findByPk(c.CocktailID);

      fullDtoCocktails.push({
        TableName: table.Location,
        OrderPersonName: order.PeopleName,
        CocktailName: cocktail.Name,
        ID: c.ID,
        OrderID: c.OrderID,
        CocktailID: c.CocktailID,
        Delivered: c.Delivered,
        Ready: c.Ready,
        OrderedAt: c.OrderedAt,
      });
    }

    return fullDtoCocktails;
  }
}

export = new CocktailController();
