<template>
  <v-card>
    <v-card-title>Hierarchia VVN</v-card-title>

    <v-card-text>
      <v-list density="compact">
        <v-list-group
          v-for="group in groups"
          :key="group.id"
          :value="group.id"
        >
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="VVN skupina">
              <v-list-item-title>
                {{ group.name }} ({{ group.id }})
              </v-list-item-title>
            </v-list-item>
          </template>

          <v-list-group
            v-for="loc in group.locations"
            :key="loc.id"
            :value="loc.id"
          >
            <template #activator="{ props }">
              <v-list-item v-bind="props">
                <v-list-item-title>
                  📍 {{ loc.address }}
                </v-list-item-title>
              </v-list-item>
            </template>

            <v-list-item
              v-for="ip in loc.ipAccounts"
              :key="ip.id"
            >
              <v-list-item-title>
                ☎️ {{ ip.number }} ({{ ip.extension }})
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  groups: any[]
}>()
</script>