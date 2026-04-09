<template>
  <div>
    <!-- DOCUMENT HEADER -->
    <div class="doc-header">
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
``