import { TableInfo } from "../../models/TableInfo";

export class CreateOrderDTO {
  public PeopleName: string;
  public Complete: boolean;
  public TableInfo: TableInfo;
}
