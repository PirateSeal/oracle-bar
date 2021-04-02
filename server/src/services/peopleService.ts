import { PeopleSignupDTO } from "../dtos/peopleSignupDTO";
import { people } from "../models/people";
import {location} from "../models/location"

export default class PeopleService {
  async save(model: PeopleSignupDTO) {
    let p = new people()
    p.name = model.name
    let table = await location.findByPk(model.tableId);
    p.tableRef = table;
    p.save()
    return p
  }
}