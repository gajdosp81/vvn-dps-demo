<template>
 pôjdu sem ↓ -->  <!-- HEADER -->
        <!-- Emergency numbers -->
        <!-- Typy a počty použitých brán -->
        <!-- Skupinové doplnkové služby -->
        <!-- IP účty (SX0131) -->

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import VvnGroupSection from '@/components/sections/VvnGroupSection.vue'
import DataServiceSection from '@/components/sections/DataServiceSection.vue'
</script>

<style scoped>
.header {
  padding: 16px 24px;
  font-size: 1.6rem;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
}
</style>
  <div class="header">
    B2B Implementačný Plán – DPS Demo
  </div>

  <v-app>
    <v-main>
      <v-container class="mt-6">

        <!-- VVN GROUP (SX0125) -->
        <VvnGroupSection />

        <!-- DATA SERVICE -->
        <DataServiceSection />

