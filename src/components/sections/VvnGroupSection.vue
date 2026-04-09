<template>
  <v-card class="mb-6">
    <v-card-title>
      Detaily VVN skupiny zákazníka (SX0125)
    </v-card-title>

    <v-card-text>
      <table class="dps-table">
        <thead>
          <tr>
            <th>Aktivita</th>
            <th>Názov VVN skupiny</th>
            <th>Login administrátora</th>
            <th>Heslo administrátora</th>
            <th>Verejné číslo portálu</th>
            <th>Interná klapka portálu</th>
            <th>Interný prefix</th>
            <th>Počet hovorov</th>
            <th>Poskytovateľ služby</th>
            <th>Číselný rozsah</th>
            <th>Čísla MIMO rozsahu</th>
            <th>Tenant / doména Teams</th>
            <th>Teams – upresnenie</th>
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
            <td><input v-model="model.provider" disabled /></td>
            <td><input v-model="model.ddiRange" /></td>
            <td><input v-model="model.mimoNumbers" /></td>
            <td><input v-model="model.teamsTenant" /></td>
            <td><textarea rows="1" v-model="model.teamsInfo" /></td>
          </tr>
        </tbody>
      </table>
    </v-card-text>
  </v-card>
</template>