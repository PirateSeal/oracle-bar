import { findAllAsync } from "@/api/TableApi";

export default class TableService{


    async findAll() {
        return findAllAsync();
    }
}