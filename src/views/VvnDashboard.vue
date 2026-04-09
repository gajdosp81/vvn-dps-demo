<template>
  <v-row>
    <v-col cols="4">
      <VvnHierarchyTree :groups="vvnStore.groups" />
    </v-col>

    <v-col cols="8">
      <v-card>
        <v-card-title>Detail</v-card-title>
        <v-card-text>
          Vyber položku v hierarchii (VVN / lokalita / IP účet)
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useVvnStore } from '@/store/vvnStore'
import VvnHierarchyTree from '@/components/tree/VvnHierarchyTree.vue'

const vvnStore = useVvnStore()
</script>