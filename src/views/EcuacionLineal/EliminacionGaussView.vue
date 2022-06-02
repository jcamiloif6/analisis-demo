<template>
  <div class="eliminacionGauss">
    <h1>Eliminación Gausseana</h1>
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ messageMatrizGauss }}</p>
    <input v-model="messageMatrizGauss" placeholder="" />
    <p>Vector de Términos Independientes: {{ messageVecIndependienteGauss }}</p>
    <input v-model="messageVecIndependienteGauss" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>