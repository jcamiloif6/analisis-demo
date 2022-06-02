<template>
  <div class="luSimple">
    <h1>Factorización LU Simple</h1>
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ messageMatrizLUSimple }}</p>
    <input v-model="messageMatrizLUSimple" placeholder="" />
    <p>Vector de Términos Independientes: {{ messageVecIndependienteLUSimple }}</p>
    <input v-model="messageVecIndependienteLUSimple" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>