<template>
  <v-card class="mb-6">
    <v-card-title>
      Detaily VVN skupiny zákazníka (SX0125)
    </v-card-title>

    <!-- TABUĽKA IDE PRIAMO SEM -->
    <div style="overflow-x:auto;">
      <table class="dps-table">
        <thead>
          <tr>
            <th>Aktivita</th>
            <th>Názov VVN skupiny</th>
            <th>Login administrátora</th>
            <th>Heslo administrátora</th>
            <th>Verejné číslo portálu</th>
            <th>Interná klapka</th>
            <th>Interný prefix</th>
            <th>Počet hovorov</th>
            <th>Poskytovateľ</th>
            <th>Číselný rozsah</th>
            <th>MIMO rozsahu</th>
            <th>Teams tenant/doména</th>
            <th>Teams info</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <select>
                <option>zriadiť novú VVN skupinu</option>
                <option>zrušiť VVN skupinu</option>
              </select>
            </td>
            <td><input value="agom_sr" /></td>
            <td><input /></td>
            <td><input type="password" /></td>
            <td><input value="0334114500" /></td>
            <td><input value="500" /></td>
            <td><input value="-" /></td>
            <td><input type="number" value="15" /></td>
            <td><input value="Slovak Telecom, a.s"/></td>
            <td><input value="nová - rozsah 100" /></td>
            <td><input value="0335489521, 0335895122" /></td>
            <td><input /></td>
            <td><input /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-card>
</template>
