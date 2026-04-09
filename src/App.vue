<template>
  <v-app>

    <div class="doc-header">
      B2B Implementačný Plán – DPS Demo
    </div>

    <v-main>
      <div style="padding:20px; background:#eef;">
        TEST – AK VIDÍŠ TENTO TEXT, CONTENT SA RENDERUJE
      </div>

      <VvnGroupSection />
      <DataServiceSection />

    </v-main>

  </v-app>
</template>

<script setup>
import VvnGroupSection from './components/sections/VvnGroupSection.vue'
import DataServiceSection from './components/sections/DataServiceSection.vue'
</script>
