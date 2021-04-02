import { CreateOrderDTO } from "./createOrderDTO";
import { TableInfo } from "../models/TableInfo";

export class OrderDTO extends CreateOrderDTO {
  public id: number;
  public people_name: string;
  public complete: boolean;
  public table_info: TableInfo;
}
