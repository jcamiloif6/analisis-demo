<template>
  <div class="crout">
    <h1>Factorización por Crout</h1>
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    > 
    <p>Matríz: {{ messageMatrizCrout }}</p>
    <input v-model="messageMatrizCrout" placeholder="" />
    <p>Vector de Términos Independientes: {{ messageVecIndependienteCrout }}</p>
    <input v-model="messageVecIndependienteCrout" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>