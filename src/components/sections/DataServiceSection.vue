<template>
  <v-card class="mb-6">
    <v-card-title>
      Detaily dátovej služby
    </v-card-title>

    <v-card-text>
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
              <select v-model="model.accessType">
                <option>BCN</option>
                <option>BI</option>
                <option>VoiceFBA</option>
                <option>Symetr. do ST-IP/MPLS</option>
                <option>Asymetr. do ST-IP/MPLS</option>
                <option>Iná dátová služba</option>
              </select>
            </td>
            <td><input v-model="model.serviceName" /></td>
            <td><input v-model="model.vlanId" /></td>
            <td><input v-model="model.location" disabled /></td>
          </tr>
        </tbody>
      </table>
    </v-card-text>
  </v-card>
</template>