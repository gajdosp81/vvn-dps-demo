<template>
  <!-- MAGENTA BANNER -->
  <div class="vvn-banner">
    <div class="vvn-title">VVN DPS Demo</div>
    <div class="vvn-subtitle">Dashboard</div>
    <div class="vvn-description">
      Tu bude strom VVN → Lokalita → IP účty
    </div>
  </div>

  <!-- APP CONTENT -->
  <v-app>
    <v-main>
      <v-container class="mt-6">
        <v-card>
          <v-card-title>Obsah</v-card-title>
          <v-card-text>
            Sem pôjde strom a detail panel.
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
.vvn-banner {
  width: 100%;
  background-color: #E20074; /* Magenta */
  color: white;
  padding: 20px 32px;
}

.vvn-title {
  font-size: 1.8rem;
  font-weight: 600;
}

.vvn-subtitle {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 4px;
}

.vvn-description {
  font-size: 0.95rem;
  margin-top: 6px;
  opacity: 0.9;
}
</style>