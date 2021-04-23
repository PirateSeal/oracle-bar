import ErrorHandler from "./ErrorHandler";
import OrderService from "../services/OrderService";
import { OrderDTO } from "../dtos/Order/OrderDTO";
import { CreatedOrderDTO } from "../dtos/Order/CreatedOrderDTO";
import { Order } from "../models/Order";
import { OrderNewCocktailsDTO } from "../dtos/Order/OrderNewCocktailsDTO";
import { BillDTO } from "../dtos/Order/BillDTO";
import CocktailService from "../services/CocktailService";
import { debug } from "console";

class OrderController {
 
  private _service = OrderService;
  private _cocktailOrderService = CocktailService;

  defaultMethod() {
    throw new ErrorHandler(501, "Not implemented method");
  }

  async FetchAll(): Promise<CreatedOrderDTO[]> {
    return await this._service.FetchAll();
  }

  async FetchOneById(id: number): Promise<CreatedOrderDTO> {
    return await this._service.FetchOneById(id);
  }

  async CreateOne(model: OrderDTO): Promise<CreatedOrderDTO> {
    return await this._service.CreateOne(model);
  }

  async GetBill(tableId: number): Promise<BillDTO[]> {
    
    let orders = await this._service.GetByTable(tableId);

    let bills: BillDTO[] = []
    for(let o of orders){
      
      let bill = new BillDTO();
      bill.orderID = o.ID;
      bill.orderPeopleName = o.PeopleName;
      let cocktails: {id: number; name: string, price: number, quantity: number}[] = [];
      let fetchedCocktails =  await this._cocktailOrderService.FetchByOrder(o.ID)

      for(let cocktail of fetchedCocktails) {
        
        let cocktailDTO =  await this._cocktailOrderService.FetchOneById(cocktail.CocktailID)
        if(cocktails.find(c => c.id === cocktailDTO.ID) === undefined) {
          cocktails.push({
            id: cocktailDTO.ID,
            name: cocktailDTO.Name,
            price: cocktailDTO.Price,
            quantity: 1
          })
        } else {
          cocktails.find(c => c.id === cocktailDTO.ID).quantity++;
        }
      }
      bill.cocktails = cocktails;
      bills.push(bill)
    }

    return bills;

  }

  async AddCocktailsToOrder(model: OrderNewCocktailsDTO) {
    await this._service.AddCocktailToCommand(model);
  }

  async UpdateOneById(
    id: number,
    model: CreatedOrderDTO
  ): Promise<[number, Order[]]> {
    return await this._service.UpdateOneById(id, model);
  }

  async DeleteOneById(id: number): Promise<number> {
    return await this._service.DeleteOneById(id);
  }

  async completeOrder(arg0: number) {
    return await this._service.completeOder(arg0);
  }
}

export = new OrderController();
