<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          Table
          <!-- <button class="btn btn-primary my-1" @click="refresh">Refresh</button> -->
        </h5>
        <label class="my-1 mr-2" for="table">Choisir une table</label>
        <select
          id="table"
          class="form-control"
          v-model="selectedTable"
          required
          @change="print()"
        >
          <option v-for="table in tables" :key="table.ID" :value="table">{{table.Location}}</option>
        </select>

        <button
          class="btn btn-primary my-1"
          :disabled="isTableSelected"
          @click="getOrderList"
        >
          Valider
        </button>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script lang="ts">
import { TableInfo } from "@/models/Table";
import OrderService from "@/services/OrderService";
import TableService from "@/services/TableService";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class WaitersMenu extends Vue {
  tables: Array<TableInfo> = [];
  selectedTable: any;
  orders: any;

  async mounted() {
    await this.refresh();
  }

  get isTableSelected(): boolean {
    return (this.selectedTable !== undefined);
  }

  async refresh() {
    this.tables = await TableService.findAll();
    
  }

  async getOrderList() {
    this.orders = await OrderService.getBills(this.selectedTable.ID);
  }

  print(){
    console.log(this.selectedTable)
  }
}
</script>
