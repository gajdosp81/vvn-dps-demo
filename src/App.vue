<template>
  <div style="padding:20px">
    <div
      style="
        width:100%;
        height:64px;
        background:#E20074;
        color:white;
        display:flex;
        align-items:center;
        font-size:20px;
        padding-left:24px;
      "
    >
      VVN DPS Demo
    </div>

    <h2 style="margin-top:24px;color:red">
      AK VIDÍŠ TENTO TEXT ČERVENÝ,
      VUE SA SPUSTILO SPRÁVNE
    </h2>

    <p>
      Timestamp: {{ now }}
    </p>
  </div>
</template>

<script setup lang="ts">
const now = new Date().toISOString()
</script>