<template>
  <v-app>
    <div class="vvn-header">
      <span class="vvn-title">VVN DPS Demo</span>
    </div>

    <v-main>
      <v-container>
        <h2 style="color:red">ROUTER SA NEPOUŽÍVA</h2>
        <VvnDashboard />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import VvnDashboard from '@/views/VvnDashboard.vue'
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