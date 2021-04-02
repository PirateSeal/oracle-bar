import { PeopleDTO } from "../dtos/peopleDTO";
import { People } from "../models/People";
import {Location} from "../models/Location"

export default class PeopleService {
  async save(model: PeopleDTO) {
    let p = new People()
    p.name = model.name
    let table = await Location.findByPk(model.tableId);
    p.tableRef = table;
    p.save()
  }
}
