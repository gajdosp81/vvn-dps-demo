<template>
  <v-app>
    <!-- MAGENTA HEADER -->
    <v-app-bar
      color="primary"
      elevation="0"
      height="64"
    >
      <v-toolbar-title class="header-title">
        VVN DPS Demo
      </v-toolbar-title>
    </v-app-bar>

    <!-- MAIN CONTENT -->
    <v-main>
      <v-container class="mt-6">
        <v-card>
          <v-card-title>Dashboard</v-card-title>
          <v-card-text>
            Tu bude strom VVN → Lokalita → IP účty
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
.header-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}
</style>