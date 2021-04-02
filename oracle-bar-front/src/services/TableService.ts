import { findAllTables } from "@/api/TableApi";

export default class TableService{


    async findAll() {
        const tables = await findAllTables();
        return tables;
    }
}