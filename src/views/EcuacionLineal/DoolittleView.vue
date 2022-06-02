<template>
  <div class="doolittle">
    <h1>Factorización por Doolittle</h1>
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ messageMatrizDoolittle }}</p>
    <input v-model="messageMatrizDoolittle" placeholder="" />
    <p>Vector de Términos Independientes: {{ messageVecIndependienteDoolittle }}</p>
    <input v-model="messageVecIndependienteDoolittle" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>