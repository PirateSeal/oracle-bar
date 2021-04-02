import { TableInfo } from "../models/TableInfo";

export class CreateOrderDTO {
  public people_name: string;
  public complete: boolean;
  public table_info: TableInfo;
}
