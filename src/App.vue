<template>
  <v-app>
    <!-- FULL-WIDTH HEADER -->
    <v-app-bar
      app
      flat
      color="primary"
      height="64"
    >
      <v-container class="d-flex align-center">
        <v-toolbar-title class="header-title">
          VVN DPS Demo
        </v-toolbar-title>
      </v-container>
    </v-app-bar>

    <!-- MAIN CONTENT -->
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
.header-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}
</style>