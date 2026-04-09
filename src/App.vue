<template>
  <v-app>

    <!-- DOCUMENT HEADER -->
    <div class="doc-header">
      B2B Implementačný Plán – DPS Demo
    </div>

    <v-main>
      <v-container class="mt-6">

        <!-- SX0125 -->
        <VvnGroupSection />

        <!-- DATA SERVICE -->
        <DataServiceSection />

      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>
import VvnGroupSection from './components/sections/VvnGroupSection.vue'
import DataServiceSection from './components/sections/DataServiceSection.vue'
</script>