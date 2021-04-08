import { OrderDTO } from "./OrderDTO";

export class CreatedOrderDTO extends OrderDTO {
  public ID: number;
  public PeopleName: string;
  public Complete: boolean;
  public TableID: number;
}
