<h2 style="color:red">VVN DASHBOARD LOADED</h2>
<template>
  <v-container>
    <v-row>
      <!-- LEFT: TREE -->
      <v-col cols="4">
        <VvnTreeSimple
          :data="vvnData"
          @select="onSelect"
        />
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
            Vyber položku v strome (VVN / lokalita / IP účet)
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VvnTreeSimple from '@/components/tree/VvnTreeSimple.vue'

const selected = ref<null | { type: string; item: any }>(null)

function onSelect(payload: { type: string; item: any }) {
  selected.value = payload
}

const vvnData = [
  {
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
            user: 'Fero Kokoska'
          },
          {
            id: 'SX0131-2',
            number: '0334114528',
            extension: '528',
            user: 'Jan Brachala'
          }
        ]
      }
    ]
  }
]
</script>