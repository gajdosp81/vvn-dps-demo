<template>
  <v-app>
    <!-- MAGENTA HEADER -->
    <v-app-bar color="primary">
      <v-toolbar-title class="text-white">
        VVN DPS Demo
      </v-toolbar-title>
    </v-app-bar>

    <!-- CONTENT -->
    <v-main>
      <v-container class="mt-4">
        <v-row>
          <!-- LEFT: TREE -->
          <v-col cols="4">
            <v-card>
              <v-card-title>VVN Hierarchia</v-card-title>
              <v-card-text>
                <ul class="tree">
                  <li>
                    🗂️ AGOM_SR (SX0125)
                    <ul>
                      <li>
                        📍 Bratislava
                        <ul>
                          <li>☎️ 0334114527 (527)</li>
                          <li>☎️ 0334114528 (528)</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- RIGHT: DETAIL -->
          <v-col cols="8">
            <v-card>
              <v-card-title>Detail</v-card-title>
              <v-card-text>
                Klikni na položku vľavo – detail bude tu.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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

.tree {
  list-style: none;
  padding-left: 0;
}

.tree ul {
  list-style: none;
  padding-left: 16px;
}
</style>