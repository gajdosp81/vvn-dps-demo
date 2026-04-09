<template>
  <div>
    <!-- HEADER -->
    <div class="header">
      B2B Implementačný Plán – DPS Demo
    </div>

    <v-app>
      <v-main>
        <v-container class="mt-6">

          <VvnGroupSection />
          <DataServiceSection />

        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
import VvnGroupSection from './components/sections/VvnGroupSection.vue'
import DataServiceSection from './components/sections/DataServiceSection.vue'
</script>

<style scoped>
.header {
  padding: 16px 24px;
  font-size: 1.6rem;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
}
</style>