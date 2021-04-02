import {PeopleSignupDTO} from "../dtos/peopleSignupDTO";
import {People} from "../models/People";
import {Location} from "../models/Location"

export default class PeopleService {

    async Save(model: PeopleSignupDTO) {
        let p = new People()
        p.name = model.name
        p.tableRef = await Location.findByPk(model.tableId);
        await p.save()
        return p
    }
}
