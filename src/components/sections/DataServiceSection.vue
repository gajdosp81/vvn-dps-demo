<template>
  <v-card class="mb-6">
    <v-card-title>
      Detaily dátovej služby
    </v-card-title>

    <!-- OPÄŤ: TABUĽKA NIE JE vo v-card-text -->
    <div style="overflow-x:auto;">
      <table class="dps-table">
        <thead>
          <tr>
            <th>Typ prístupu</th>
            <th>Názov / číslo služby</th>
            <th>VLAN – ID</th>
            <th>Lokalita</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <select>
                <option>BCN</option>
                <option>BI</option>
                <option>VoiceFBA</option>
              </select>
            </td>
            <td><input value="BB-454-Sa" /></td>
            <td><input value="10" /></td>
            <td><input value="Pražská 15, Banská Bystrica" disabled /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-card>
</template>