<template>
  <div>
<!-- <h1>test Component</h1>

<button @click="print">test</button>
  
  <button @click="printCocktails">Cocktails</button> -->
  </div>
</template>

<script lang="ts">
import CocktailService from "@/services/CocktailService";
import TableService from "@/services/TableService";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Test extends Vue{
//   tables: any;
//   cocktails: any;
//   private tableService = new TableService();
//   private cocktailService = new CocktailService();

// async mounted(){
//     this.tables = await this.tableService.findAll();
   
// }

// async printCocktails(){
//     this.cocktails = await this.cocktailService.findAll();
// console.log(this.cocktails);
// }

// print(){
//     console.log(this.tables);
// }

}
</script>