import { PeopleSignupDTO } from "../dtos/peopleSignupDTO";
import { People } from "../models/People";
import {Location} from "../models/Location"

export default class PeopleService {
    let p = new People()
  async save(model: PeopleSignupDTO) {
    p.name = model.name
    let table = await Location.findByPk(model.tableId);
    p.tableRef = table;
    p.save()
    return p
  }
}
