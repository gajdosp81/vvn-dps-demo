<template>
  <v-card class="mb-6">
    <v-card-title>
      Detaily VVN skupiny zákazníka (SX0125)
    </v-card-title>

    <v-card-text>
      <table class="vvn-table">
        <thead>
          <tr>
            <th>Aktivita</th>
            <th>Názov VVN skupiny</th>
            <th>Login administrátora skupiny</th>
            <th>Heslo administrátora skupiny</th>
            <th>Verejné číslo hlasového portálu</th>
            <th>Interná klapka hlasového portálu</th>
            <th>Interný rozlišovací prefix</th>
            <th>Počet simultánnych hovorov</th>
            <th>Poskytovateľ služby (BroadSoft)</th>
            <th>Číselný rozsah pre VVN účty</th>
            <th>Čísla MIMO číselného rozsahu</th>
            <th>Názov tenanta / domény pre Teams</th>
            <th>Volania Teams – upresnenie</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <select v-model="model.activity">
                <option>zriadiť novú VVN skupinu</option>
                <option>zrušiť VVN skupinu</option>
                <option>bez zmeny</option>
              </select>
            </td>

            <td><input v-model="model.name" /></td>
            <td><input v-model="model.adminLogin" /></td>
            <td><input type="password" v-model="model.adminPassword" /></td>
            <td><input v-model="model.portalPublicNumber" /></td>
            <td><input v-model="model.portalExtension" /></td>
            <td><input v-model="model.internalPrefix" /></td>
            <td><input type="number" v-model="model.simultaneousCalls" /></td>
            <td>
              <input v-model="model.provider" disabled />
            </td>
            <td><input v-model="model.ddiRange" /></td>
            <td><input v-model="model.mimoNumbers" /></td>
            <td><input v-model="model.teamsTenant" /></td>
            <td>
              <textarea rows="2" v-model="model.teamsInfo"></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue'

const model = reactive({
  activity: 'zriadiť novú VVN skupinu',
  name: 'agom_sr',
  adminLogin: '',
  adminPassword: '',
  portalPublicNumber: '0334114500',
  portalExtension: '500',
  internalPrefix: '-',
  simultaneousCalls: 15,
  provider: 'Slovak Telecom, a.s',
  ddiRange: 'nová - rozsah 100',
  mimoNumbers: '0335489521, 0335895122',
  teamsTenant: '',
  teamsInfo: ''
})
</script>

<style scoped>
.vvn-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
}

.vvn-table th {
  background: #fff6b0; /* podobné žltým hlavičkám v Exceli */
  border: 1px solid #ccc;
  padding: 6px;
  text-align: left;
  vertical-align: bottom;
}

.vvn-table td {
  border: 1px solid #ccc;
  padding: 4px;
  vertical-align: top;
}

.vvn-table input,
.vvn-table select,
.vvn-table textarea {
  width: 100%;
  font-size: 0.8rem;
}
</style>
``