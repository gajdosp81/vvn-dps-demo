<template>
  <v-card class="mb-6">
    <v-card-title>
      Detaily dátovej služby
    </v-card-title>

    <v-card-text>
      <div class="field">
        <label>Typ prístupu</label>
        <select v-model="model.accessType">
          <option>BCN</option>
          <option>BI</option>
          <option>VoiceFBA</option>
          <option>Symetr. do ST-IP/MPLS</option>
          <option>Asymetr. do ST-IP/MPLS</option>
          <option>Iná dátová služba</option>
        </select>
      </div>

      <div class="field">
        <label>Názov / číslo dátovej služby</label>
        <input v-model="model.serviceName" />
      </div>

      <div class="field">
        <label>VLAN – ID</label>
        <input v-model="model.vlanId" />
      </div>

      <div class="field">
        <label>Lokalita (adresa)</label>
        <input v-model="model.location" disabled />
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue'

const model = reactive({
  accessType: 'BCN',
  serviceName: '',
  vlanId: '',
  location: 'Prazska 15, Banska Bystrica'
})
</script>

<style scoped>
.field {
  margin-bottom: 12px;
}
.field label {
  display: block;
  font-size: 0.85rem;
  opacity: 0.8;
}
.field input,
.field select {
  width: 100%;
}
</style>