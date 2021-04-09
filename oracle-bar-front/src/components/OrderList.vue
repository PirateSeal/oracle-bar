<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">cocktail</th>
          <th scope="col">delivered</th>
          <th scope="col">Ready</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cocktail, index) in cocktailList" :key="cocktail.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ cocktailId }}</td>
          <td>
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch1"
              />
            </div>
          </td>
          <td>
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch1"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">

import CocktailService from "@/services/CocktailService";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class OrderList extends Vue {
  cocktailList = [];
  
  async mounted() {
    // this.cocktailList = await CocktailService.findAllOrderedCocktails();
    console.log(await CocktailService.findAllOrderedCocktails());
  }
}
</script>
