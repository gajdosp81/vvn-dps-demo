<template>
  <v-app>
    <!-- MAGENTA FULL-WIDTH HEADER -->
    <div class="vvn-header">
      <span class="vvn-title">B2B Implementačný plán - DPS Demo</span>
    </div>

    <!-- CONTENT (zatím len potvrdenie) -->
    <v-main>
      <v-container class="mt-6">
        <p>
          Ak vidíš tento text pod hlavičkou,
          header funguje správne.
        </p>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style scoped>
.vvn-header {
  width: 100%;
  height: 64px;
  background-color: #E20074; /* magenta */
  display: flex;
  align-items: center;
  padding-left: 24px;
}

.vvn-title {
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}
</style>