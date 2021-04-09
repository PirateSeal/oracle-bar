<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Cocktail</th>
          <th scope="col">table</th>
          <th scope="col">Name</th>
          <th scope="col">Delivered</th>
          <th scope="col">Ready</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cocktail, index) in cocktailList" :key="cocktail.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ cocktail.CocktailName }}</td>
          <td>{{ cocktail.TableName }}</td>
          <td>{{ cocktail.OrderPersonName }}</td>
          <td>
            <div class="custom-control custom-switch">
              <input
                v-model="cocktail.Delivered"
                type="checkbox"
                @change="(e) => {updateDelireryStatus(cocktail.ID)}"
              />
            </div>
          </td>
          <td>
            <div class="custom-control">
              <input
                v-model="cocktail.Ready"
                type="checkbox"
                @change="(e) => {updateReadyStatuts(cocktail.ID)}"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import OrderedCocktail from "../models/OrderedCocktail";
import CocktailService from "../services/CocktailService";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class OrderList extends Vue {
  cocktailList: Array<OrderedCocktail> = [];

  async mounted() {
    await this.refresh();
  }

  async updateDelireryStatus(orderCocktailId: number) {
    await CocktailService.updateDelivery(orderCocktailId);
    await this.refresh();
  }

  async updateReadyStatuts(orderCocktailId: number) {
    await CocktailService.updateReady(orderCocktailId);
  }

  async refresh() {
    this.cocktailList = await CocktailService.findAllOrderedCocktails();
    console.log(this.cocktailList);
  }
}
</script>
