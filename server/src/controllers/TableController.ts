import ErrorHandler from "./ErrorHandler";
import TableService from "../services/TableService";
import { CreateTableDTO } from "../dtos/Table/CreateTableDTO";
import { TableDTO } from "../dtos/Table/TableDTO";
import { TableInfo } from "../models/TableInfo";
import { Order } from "../models/Order";

class TableController {
  private _service = TableService;

  defaultMethod() {
    throw new ErrorHandler(501, "Not implemented method");
  }

  async FetchAll(): Promise<TableInfo[]> {
    return await this._service.FetchAll();
  }

  async FetchOneById(id: number): Promise<TableDTO> {
    return await this._service.FetchOneById(id);
  }

  async CreateOne(model: CreateTableDTO): Promise<TableDTO> {
    return await this._service.CreateOne(model);
  }

  async UpdateOneById(
    id: number,
    model: TableDTO
  ): Promise<[number, TableInfo[]]> {
    return await this._service.UpdateOneById(id, model);
  }

  async DeleteOneById(id: number): Promise<number> {
    return await this._service.DeleteOneById(id);
  }
}

export = new TableController();
