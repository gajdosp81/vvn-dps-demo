<script setup>
import { ref } from 'vue'

const rows = ref([
  {
    id: Date.now(),
    activity: 'zriadenie účtu',
    provisioningType: 'nový účet',
    publicNumber: '0334114527',
    extension: '527',
    firstName: 'Fero',
    lastName: 'Kokoška',
    deviceType: 'Linksys SPA 942',
    macAddress: '',
    ipAddress: '',
    servicePackage: 'Klasik',
    teams: 'zriadiť',
    publishNumber: 'nezverejniť',
    voicemail: 'zriadiť',
    costCenter: '',
    note: ''
  }
])

function addRow () {
  rows.value.push({
    id: Date.now() + Math.random(),
    activity: 'zriadenie účtu',
    provisioningType: '',
    publicNumber: '',
    extension: '',
    firstName: '',
    lastName: '',
    deviceType: '',
    macAddress: '',
    ipAddress: '',
    servicePackage: '',
    teams: '',
    publishNumber: '',
    voicemail: '',
    costCenter: '',
    note: ''
  })
}

function removeRow (index) {
  rows.value.splice(index, 1)
}
</script>

<template>
  <v-card class="mb-6">
    <v-card-title>
      Detaily IP účtov danej lokality (SX0131)
    </v-card-title>

    <div style="overflow-x:auto;">
      <table class="dps-table">
        <thead>
          <tr>
            <th>Aktivita</th>
            <th>Spôsob zriadenia</th>
            <th>Verejné číslo</th>
            <th>Klapka</th>
            <th>Meno</th>
            <th>Priezvisko</th>
            <th>Typ zariadenia</th>
            <th>MAC / výr. číslo</th>
            <th>IP adresa</th>
            <th>Balík služieb</th>
            <th>Volania Teams</th>
            <th>Zverejnenie čísla</th>
            <th>Hlasová schránka</th>
            <th>Nákladové stredisko</th>
            <th>Upresnenie</th>
            <th>Akcia</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(row, index) in rows" :key="row.id">
            <td>
              <select v-model="row.activity">
                <option>zriadenie účtu</option>
                <option>zmena detailov účtu</option>
                <option>zrušenie účtu</option>
              </select>
            </td>

            <td>
              <select v-model="row.provisioningType">
                <option>nový účet</option>
                <option>zmenou z prístupu ISDN</option>
                <option>zmenou z prístupu TP</option>
              </select>
            </td>

            <td><input v-model="row.publicNumber" /></td>
            <td><input v-model="row.extension" /></td>
            <td><input v-model="row.firstName" /></td>
            <td><input v-model="row.lastName" /></td>
            <td><input v-model="row.deviceType" /></td>
            <td><input v-model="row.macAddress" /></td>
            <td><input v-model="row.ipAddress" /></td>

            <td>
              <select v-model="row.servicePackage">
                <option>Klasik</option>
                <option>Premium</option>
                <option>Štandardný</option>
                <option>Kompletný</option>
              </select>
            </td>

            <td>
              <select v-model="row.teams">
                <option>zriadiť</option>
                <option>nezriadiť</option>
              </select>
            </td>

            <td>
              <select v-model="row.publishNumber">
                <option>zverejniť</option>
                <option>nezverejniť</option>
              </select>
            </td>

            <td>
              <select v-model="row.voicemail">
                <option>zriadiť</option>
                <option>nezriadiť</option>
              </select>
            </td>

            <td><input v-model="row.costCenter" /></td>
            <td><input v-model="row.note" /></td>

            <td>
              <button @click="removeRow(index)">❌</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="padding:8px">
      <button @click="addRow">➕ Pridať IP účet</button>
    </div>
  </v-card>
</template>