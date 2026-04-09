<template>
  <v-app>
    <!-- MAGENTA HEADER -->
    <v-app-bar color="primary" density="comfortable">
      <v-toolbar-title class="text-white">
        VVN DPS Demo
      </v-toolbar-title>
    </v-app-bar>

    <!-- CONTENT -->
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
.text-white {
  color: white;
}
</style>