<script setup>
import { reactive } from 'vue'

const row = reactive({
  activity: 'zriadenie účtu',
  provisioningType: 'nový účet',
  publicNumber: '0334114527',
  extension: '527',
  userFirstName: 'Fero',
  userLastName: 'Kokoška',
  deviceType: 'Linksys SPA 942',
  macAddress: '',
  ipAddress: '',
  servicePackage: 'Klasik',
  teamsEnabled: 'zriadiť',
  callerIdPresentation: 'nezverejniť',
  voicemail: 'zriadiť',
  costCenter: '',
  additionalInfo: ''
})
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
            <th>Typ KZ / zariadenia</th>
            <th>MAC / výrobný údaj</th>
            <th>IP adresa</th>
            <th>Balík služieb</th>
            <th>Volania Teams</th>
            <th>Zverejnenie čísla</th>
            <th>Hlasová schránka</th>
            <th>Nákladové stredisko</th>
            <th>Upresnenie / info</th>
          </tr>
        </thead>

        <tbody>
          <tr>
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
            <td><input v-model="row.userFirstName" /></td>
            <td><input v-model="row.userLastName" /></td>
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
              <select v-model="row.teamsEnabled">
                <option>zriadiť</option>
                <option>nezriadiť</option>
              </select>
            </td>

            <td>
              <select v-model="row.callerIdPresentation">
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
            <td><input v-model="row.additionalInfo" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-card>
</template>