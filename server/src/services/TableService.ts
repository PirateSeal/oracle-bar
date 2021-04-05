import { CreateTableDTO } from "../dtos/Table/CreateTableDTO";
import { TableDTO } from "../dtos/Table/TableDTO";
import { TableInfo } from "../models/TableInfo";

export default new (class TableService {
  public async FetchAll(): Promise<TableInfo[]> {
    return await TableInfo.findAll();
  }

  async FetchOneById(id: number): Promise<TableInfo> {
    return await TableInfo.findByPk(id);
  }

  async CreateOne(model: CreateTableDTO): Promise<TableDTO> {
    return await TableInfo.create({
      Number: model.Number,
      Location: model.Location,
    });
  }

  async UpdateOneById(
    id: number,
    model: TableDTO
  ): Promise<[number, TableInfo[]]> {
    return await TableInfo.update(
      {
        Number: model.Number,
        Location: model.Location,
      },
      {
        where: { ID: id },
      }
    );
  }

  async DeleteOneById(id: number): Promise<number> {
    return await TableInfo.destroy({ where: { ID: id } });
  }
})();
