<template>
  <div>
    <div v-if="!isSeated">
      <form @submit.prevent="setTable">
        <div class="row">
          <div class="col">
            <label for="name" class="form-label">Name</label>
            <input
              v-model="pseudo"
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
            <select
              class="form-select"
              aria-label="table"
              id="table"
              v-model="tableId"
              required
            >
              <option selected>Choisisez une table</option>
              <option
                v-for="table in tables"
                :key="table.tableId"
                :value="table.tableId"
                >{{ table.name }}</option
              >
            </select>
          </div>
        </div>

        <button class="btn btn-primary" type="submit" @click="setTable">
          Valider
        </button>
      </form>
    </div>
    <div id="orderCocktail" v-if="isSeated">
      <div class="card-group">
        <div
          class="card"
          style="width: 18rem;"
          v-for="cocktail in cocktails"
          :key="cocktail.cocktailId"
        >
          <img :src="cocktail.photo" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ cocktail.name }}</h5>
            <p class="card-text">{{ cocktail.description }}</p>
            <p class="card-text">
              <small class="text-muted">Prix: {{ cocktail.price }} Euros</small>
            </p>

            <label for="quantity">Quantité: </label>
            <input
              id="quantity"
              type="number"
              min="0"
              max="100"
              v-model="cocktail.quantity"
            />
          </div>
        </div>
      </div>
    </div>

    <button class="btn btn-primary" @click="onSubmit">Commander</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import OrderService from "@/services/OrderService";
import TableService from "@/services/TableService";
import CocktailService from "@/services/CocktailService";
import Table from "@/models/Table";
import { Cocktail } from "@/models/Cocktail";

@Component({})
export default class Orders extends Vue {
  private orderService: OrderService = new OrderService();
  private localStorage = window.localStorage;

  private cocktailService: CocktailService = new CocktailService();
  private tableService: TableService = new TableService();

  private cocktails: Array<Cocktail> = [];
  private selectedCocktails: Array<Cocktail> = [];
  private tables: Array<Table> = [];
  private pseudo;
  private tableId;

  async mounted() {
    this.tables = await this.tableService.findAll();
    this.cocktails = await this.cocktailService.findAll();
    this.pseudo = this.localStorage.getItem("name");
    this.tableId = this.localStorage.getItem("tableId");
  }

  get isSeated(): boolean {
    return this.getPseudo != null && this.getTableId != null;
  }

  async onSubmit() {
    // await this.orderService.createOrder();
  }
  getPseudo() {
    const pseudo = this.localStorage.getItem("pseudo");
    if (pseudo === "" || pseudo == null) {
      return null;
    } else {
      return pseudo;
    }
  }

  getTableId() {
    const tableId = this.localStorage.getItem("tableId");
    if (tableId == null || tableId === "") {
      return null;
    } else {
      return +tableId;
    }
  }
  setTable() {
    this.localStorage.setItem("pseudo", this.pseudo!);
    this.localStorage.setItem("tableId", this.tableId!);
  }

  get totalPrice(): number {
    let price = 0;
    this.selectedCocktails.forEach((c) => {
      price += c.price;
    });
    return price;
  }
}
</script>
