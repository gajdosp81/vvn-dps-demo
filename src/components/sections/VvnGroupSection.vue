<template>
  <v-card class="mb-6">
    <v-card-title>
      VVN skupina (SX0125)
    </v-card-title>

    <v-card-text>
      <!-- Aktivita -->
      <div class="field">
        <label>Aktivita</label>
        <select v-model="model.activity">
          <option>zriadiť novú VVN skupinu</option>
          <option>zrušiť VVN skupinu</option>
          <option>bez zmeny</option>
        </select>
      </div>

      <!-- Názov -->
      <div class="field">
        <label>Názov VVN skupiny</label>
        <input v-model="model.name" />
      </div>

      <!-- Admin prístup -->
      <div class="field">
        <label>Login administrátora skupiny</label>
        <input v-model="model.adminLogin" />
      </div>

      <div class="field">
        <label>Heslo administrátora skupiny</label>
        <input type="password" v-model="model.adminPassword" />
      </div>

      <!-- Hlasový portál -->
      <div class="field-group">
        <div class="field">
          <label>Verejné číslo hlasového portálu</label>
          <input v-model="model.portalPublicNumber" />
        </div>

        <div class="field">
          <label>Interná klapka hlasového portálu</label>
          <input v-model="model.portalExtension" />
        </div>
      </div>

      <!-- Prefix + hovory -->
      <div class="field-group">
        <div class="field">
          <label>Interný rozlišovací prefix</label>
          <input v-model="model.internalPrefix" />
        </div>

        <div class="field">
          <label>Počet simultánnych hovorov</label>
          <input type="number" v-model="model.simultaneousCalls" />
        </div>
      </div>

      <!-- Poskytovateľ -->
      <div class="field">
        <label>Poskytovateľ služby</label>
        <input v-model="model.provider" disabled />
      </div>

      <!-- Číselné rozsahy -->
      <div class="field">
        <label>Číselný rozsah pre VVN účty</label>
        <input v-model="model.ddiRange" />
      </div>

      <div class="field">
        <label>Čísla mimo číselného rozsahu</label>
        <input v-model="model.mimoNumbers" />
      </div>

      <!-- Teams -->
      <div class="field">
        <label>Názov tenanta / doména pre Volania Teams</label>
        <input v-model="model.teamsTenant" />
      </div>

      <div class="field">
        <label>Volania Teams – upresnenie / ostatné info</label>
        <textarea v-model="model.teamsInfo" rows="2" />
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue'

const model = reactive({
  activity: 'zriadiť novú VVN skupinu',
  name: '',
  adminLogin: '',
  adminPassword: '',
  portalPublicNumber: '',
  portalExtension: '',
  internalPrefix: '',
  simultaneousCalls: 0,
  provider: 'Slovak Telecom, a.s',
  ddiRange: '',
  mimoNumbers: '',
  teamsTenant: '',
  teamsInfo: ''
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
.field select,
.field textarea {
  width: 100%;
}

.field-group {
  display: flex;
  gap: 16px;
}
.field-group .field {
  flex: 1;
}
</style>