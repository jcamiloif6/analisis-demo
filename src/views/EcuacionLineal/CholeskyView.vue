<template>
  <div class="cholesky">
    <h1>Factorización por Cholesky</h1>
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ messageMatrizCholesky }}</p>
    <input v-model="messageMatrizCholesky" placeholder="" />
    <p>Vector de Términos Independientes: {{ messageVecIndependienteCholesky }}</p>
    <input v-model="messageVecIndependienteCholesky" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>