import ErrorHandler from "./ErrorHandler";
import OrderService from "../services/OrderService";
import { OrderDTO } from "../dtos/Order/OrderDTO";
import { Order } from "../models/Order";
import { CocktailDTO } from "../dtos/Cocktail/CocktailDTO";
import CocktailService from "../services/CocktailService";

class CocktailController {
  private _service = CocktailService;

  defaultMethod() {
    throw new ErrorHandler(501, "Not implemented method");
  }

  async FetchAll(): Promise<CocktailDTO[]> {
    return await this._service.FetchAll();
  }
}

export = new CocktailController();
