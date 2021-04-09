<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">BoraBoracle</a>

        <router-link to="/order">
          <button type="button" class="btn btn-primary">
            Commander
          </button></router-link
        >
         <router-link to="/list">
          <button type="button" class="btn btn-primary">
            Barman
          </button></router-link
        >
         <router-link to="/waiter">
          <button type="button" class="btn btn-primary">
            Service
          </button></router-link
        >
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Navbar extends Vue {}
</script>
