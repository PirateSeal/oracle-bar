import { findAllTables } from "@/api/TableApi";

export default new class TableService{


    async findAll() {
        const tables = await findAllTables();
        return tables;
    }
}