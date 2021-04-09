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
          @change="getOrderList"
        >
          <option :value="undefined"></option>
          <option v-for="table in tables" :key="table.ID" :value="table">{{
            table.Location
          }}</option>
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

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Table</th>
          <th scope="col">Personne</th>
          <th scope="col">Cocktails</th>
        </tr>
      </thead>
      <tbody v-for="(order, index) in orders" :key="order.orderId">
        <tr>
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ selectedTable.Location }}</td>
          <td>{{ order.orderPeopleName }}</td>
          <td>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(cocktail, index) in order.cocktails"
                  :key="cocktail.id"
                >
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ cocktail.name }}</td>
                  <td>{{ cocktail.price }}</td>
                  <td>{{ cocktail.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td colspan="2">Total: {{ getTotal(order.cocktails) }}</td>
          <td colspan="2">
            <button
              type="submit"
              class="btn btn-danger"
              @click="complete(order.orderId)"
            >
              Encaisser
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div></div>
  </div>
</template>

<script lang="ts">
import { Cocktail, OrderToDeliver } from "@/models/Cocktail";
import { TableInfo } from "@/models/Table";
import OrderService from "@/services/OrderService";
import TableService from "@/services/TableService";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class WaitersMenu extends Vue {
  tables: Array<TableInfo> = [];
  selectedTable?: TableInfo = undefined;
  orders: Array<OrderToDeliver> = [];

  async mounted() {
    await this.refresh();
  }

  get isTableSelected(): boolean {
    return this.selectedTable !== undefined;
  }

  async refresh() {
    this.tables = await TableService.findAll();
  }

  async getOrderList() {
    this.orders = await OrderService.getBills(this.selectedTable!.ID);
  }
  async complete(orderId: number) {
    await OrderService.completeOrder(orderId);
    await this.getOrderList();
  }

  getTotal(cocktails: Array<Cocktail>) {
    let price = 0;
    cocktails.forEach((c) => {
      price += c.price;
    });
    return price;
  }
}
</script>
