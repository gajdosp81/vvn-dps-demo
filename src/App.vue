<template>
  <v-app>

    <div class="doc-header">
      B2B Implementačný Plán – DPS Demo
    </div>

    <v-main>
      <VvnGroupSection />
      <DataServiceSection />
      <IpAccountsSection />
    </v-main>

  </v-app>
</template>

<script setup>
import VvnGroupSection from './components/sections/VvnGroupSection.vue'
import DataServiceSection from './components/sections/DataServiceSection.vue'
import IpAccountsSection from './components/sections/IpAccountsSection.vue'
</script>