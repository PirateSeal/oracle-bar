<template>
  <div>
    <!-- <div> -->
    <div v-if="!isSeated">
      <form>
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
              <option selected :value="-1">Choisisez une table</option>
              <option v-for="table in tables" :key="table.ID" :value="table.ID">
                {{ table.Location }}
              </option>
            </select>
          </div>
        </div>

        <button class="btn btn-primary" type="submit" @click="seatPerson">
          Valider
        </button>
      </form>
    </div>
    <div v-else>
      <h1>Bienvenue à BoraBoracle {{ pseudo }}!</h1>

      <div class="flexCocktails">
        <div
          class="cocktailCard"
          v-for="cocktail in cocktails"
          :key="cocktail.ID"
        >
          <img :src="cocktail.Photo" alt="" /> <br />
          {{ cocktail.Name }} - {{ cocktail.Price }}€ <br />
          <input
          min="0"
          max="10"
            type="number"
            v-model="cocktail.quantity"
            class="quantityInput"
          />
        </div>
      </div>
        <p class="card-text" v-for="(cocktail, index) in orderedCocktails" :key="index">
          {{ cocktail.Name }} x {{ cocktail.quantity }} =>
          {{ cocktail.quantity * cocktail.Price }}
        </p>
    </div>
    <!-- <div id="orderCocktail">
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
    </div> -->

      <button class="btn btn-primary" @click="order" v-if="isSeated">
        Commander
      </button>
   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import OrderService from "../services/OrderService";
import TableService from "../services/TableService";
import CocktailService from "../services/CocktailService";
import { Table } from "../models/Table";
import { Cocktail } from "../models/Cocktail";

@Component({})
export default class Orders extends Vue {
  private localStorage = window.localStorage;
  private cocktails: Array<Cocktail> = [];
  private orderedCocktails: Array<Cocktail> = [];
  private tables: Array<Table> = [];
  private pseudo = "";
  private tableId = -1;
  private orderId = -1;


  async mounted() {
    this.tables = await TableService.findAll();
    this.cocktails = await CocktailService.findAll();
    console.log(this.cocktails);
    this.pseudo = this.localStorage.getItem("name")
      ? this.localStorage.getItem("name")!
      : "";
    this.orderId = this.localStorage.getItem("commandeId")
      ? parseInt(this.localStorage.getItem("commandeId")!)
      : -1;
    console.log(this.orderId);

    this.tableId = this.localStorage.getItem("tableId")
      ? parseInt(this.localStorage.getItem("tableId")!)
      : -1;
  }

  get isSeated(): boolean {
    return this.orderId != -1;
  }

  async seatPerson(e: any): Promise<void> {
    e.preventDefault();
    let response =await OrderService.createOrder({
        TableID: this.tableId,
        PeopleName: this.pseudo,
        Complete: false,
      })
    this.orderId = response.order.ID;
  }

  getOrderId() {
    const order = this.localStorage.getItem("orderId");
    if (order === "" || order == null) {
      return null;
    } else {
      return order;
    }
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

  async order() {
    this.orderedCocktails = this.orderedCocktails.concat(
      this.cocktails.filter((c) => c.quantity !== undefined && c.quantity > 0)
    );


    console.log(this.orderId);

    await OrderService.order({
    
      orderId: this.orderId,
      cocktails: this.cocktails
        .filter((c) => c.quantity !== undefined && c.quantity > 0)
        .map((c) => {
          return { quantity: c.quantity, cocktailId: c.ID };
        }),
    });
    
  }
  // setTable() {
  //   this.localStorage.setItem("pseudo", this.pseudo!);
  //   this.localStorage.setItem("tableId", this.tableId!);
  // }

  // get totalPrice(): number {
  //   let price = 0;
  //   this.selectedCocktails.forEach((c) => {
  //     price += c.price;
  //   });
  //   return price;
  // }
}
</script>
<style lang="scss" scoped>
.flexCocktails {
  display: flex;
  flex-wrap: wrap;
}

.cocktailCard {
  text-align: center;
  font-weight: bold;
  border: solid 1px black;
  margin: 5px;
  border-radius: 15px;
  width: 150px;
  img {
    width: 125px;
  }
  .quantityInput {
    width: 50%;
    margin-bottom: 5px;
    border: dotted 3px gray;
    text-align: center;
  }
}
</style>
