<template>
  <v-app>
    <!-- MAGENTA HEADER -->
    <div class="vvn-header">
      <span class="vvn-title">VVN DPS Demo</span>
    </div>

    <!-- TU MUSÍ BYŤ ROUTER -->
    <v-main>
      <v-container class="mt-6">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style scoped>
.vvn-header {
  width: 100%;
  height: 64px;
  background-color: #E20074;
  display: flex;
  align-items: center;
  padding-left: 24px;
}

.vvn-title {
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
}
</style>