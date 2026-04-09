<template>
  <!-- MAGENTA BANNER -->
  <div class="vvn-banner">
    <div class="vvn-title">VVN DPS Demo</div>
    <div class="vvn-subtitle">Dashboard</div>
    <div class="vvn-description">
      VVN → Lokalita → IP účty
    </div>
  </div>

  <!-- APP CONTENT -->
  <v-app>
    <v-main>
      <v-container class="mt-6">
        <v-row>
          <!-- LEFT: TREE -->
          <v-col cols="4">
            <v-card>
              <v-card-title>VVN Hierarchia</v-card-title>
              <v-card-text>
                <ul class="tree">
                  <li>
                    <button class="tree-btn" @click="select('vvn', vvn)">
                      🗂️ {{ vvn.name }} ({{ vvn.id }})
                    </button>

                    <ul>
                      <li v-for="loc in vvn.locations" :key="loc.id">
                        <button
                          class="tree-btn"
                          @click="select('location', loc)"
                        >
                          📍 {{ loc.address }}
                        </button>

                        <ul>
                          <li v-for="ip in loc.ipAccounts" :key="ip.id">
                            <button
                              class="tree-btn ip"
                              @click="select('ip', ip)"
                            >
                              ☎️ {{ ip.number }} ({{ ip.extension }})
                            </button>
                          </li>
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
              <v-card-text v-if="selected">
                <p><strong>Typ:</strong> {{ selected.type }}</p>
                <pre>{{ selected.item }}</pre>
              </v-card-text>
              <v-card-text v-else>
                Vyber položku v strome vľavo.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref(null)

function select(type, item) {
  selected.value = { type, item }
}

const vvn = {
  id: 'SX0125',
  name: 'AGOM_SR',
  locations: [
    {
      id: 'BA',
      address: 'Bratislava',
      ipAccounts: [
        {
          id: 'SX0131-1',
          number: '0334114527',
          extension: '527',
          user: 'Fero Kokoška',
          service: 'Klasik'
        },
        {
          id: 'SX0131-2',
          number: '0334114528',
          extension: '528',
          user: 'Ján Brachala',
          service: 'Premium'
        }
      ]
    }
  ]
}
</script>

<style scoped>
/* BANNER */
.vvn-banner {
  width: 100%;
  background-color: #E20074;
  color: white;
  padding: 20px 32px;
}
.vvn-title {
  font-size: 1.8rem;
  font-weight: 600;
}
.vvn-subtitle {
  font-size: 1.2rem;
  margin-top: 4px;
}
.vvn-description {
  font-size: 0.95rem;
  margin-top: 6px;
  opacity: 0.9;
}

/* TREE */
.tree {
  list-style: none;
  padding-left: 0;
}
.tree ul {
  list-style: none;
  padding-left: 16px;
}
.tree-btn {
  background: none;
  border: none;
  padding: 2px 0;
  cursor: pointer;
  text-align: left;
  width: 100%;
}
.tree-btn:hover {
  text-decoration: underline;
}
.tree-btn.ip {
  font-size: 0.9rem;
}
pre {
  background: #f4f4f4;
  padding: 12px;
  overflow: auto;
}
</style>