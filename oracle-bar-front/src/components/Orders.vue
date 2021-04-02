<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col">
          <label for="name" class="form-label">Name</label>
          <input
            id="name"
            type="text"
            class="form-control"
            placeholder="Name"
            aria-label="name"
            required
          />
        </div>
        <div class="col">
          <label for="table" class="form-label">Table</label>
          <select class="form-select" aria-label="table" id="table" required>
            <option selected>Choisisez une table</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="cocktails"
          checked
        />
        <label for="cocktails" class="form-check-label">
          Checked checkbox
        </label>
      </div>

      <button class="btn btn-primary" type="submit" @click="onSubmit">
        Passer la commande
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OrderService from "@/services/OrderService";
import TableService from "@/services/TableService";
import CocktailService from "@/services/CocktailService";
import Order from "@/model/Order";
import Table from "@/model/Table";
import Cocktail from "@/model/Cocktail";

@Component({})
export default class Orders extends Vue {
  private orderService = new OrderService();
  private cocktailService: CocktailService = new CocktailService();
  private tableService: TableService = new TableService();
  private cocktails: Array<Cocktail> = []; //TODO should be Arrays<Cocktail> used in checkbox
  private tables: Array<Table> = []; //TODOshould be  Array<Table> used in tale selecl
  private order;

  async mounted() {
    this.tables = await this.tableService.findAll();
    this.cocktails = await this.cocktailService.findAll();
  }

  //TODO retrive tables from TableService.findAll
  //TODO retrive coctails from cocktailService.findAll

  onSubmit() {
    this.orderService.create(this.order);
    return;
  }
}
</script>

<style></style>
