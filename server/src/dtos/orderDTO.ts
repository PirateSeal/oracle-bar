import { CreateOrderDTO } from "./createOrderDTO";
import { TableInfo } from "../models/TableInfo";

export class OrderDTO extends CreateOrderDTO {
  public ID: number;
  public PeopleName: string;
  public Complete: boolean;
  public TableInfo: TableInfo;
}
