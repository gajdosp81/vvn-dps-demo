<template>
  <div>
    <h3>VVN Hierarchia</h3>

    <div
      v-for="vvn in data"
      :key="vvn.id"
      class="vvn-item"
      @click="select('vvn', vvn)"
    >
      🗂️ {{ vvn.name }} ({{ vvn.id }})

      <div
        v-for="loc in vvn.locations"
        :key="loc.id"
        class="loc-item"
        @click.stop="select('location', loc)"
      >
        📍 {{ loc.address }}

        <div
          v-for="ip in loc.ipAccounts"
          :key="ip.id"
          class="ip-item"
          @click.stop="select('ip', ip)"
        >
          ☎️ {{ ip.number }} ({{ ip.extension }})
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any[]
}>()

const emit = defineEmits<{
  (e: 'select', payload: { type: string; item: any }): void
}>()

function select(type: string, item: any) {
  emit('select', { type, item })
}
</script>

<style scoped>
.vvn-item {
  font-weight: 600;
  margin-bottom: 8px;
  cursor: pointer;
}

.loc-item {
  margin-left: 16px;
  margin-top: 4px;
  cursor: pointer;
}

.ip-item {
  margin-left: 32px;
  font-size: 0.9rem;
  cursor: pointer;
}
</style>