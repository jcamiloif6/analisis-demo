<template>
  <div class="jacobi">
    <h1>Método de Jacobbi</h1>
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ messageMatrizJacobi }}</p>
    <input v-model="messageMatrizJacobi" placeholder="" />
    <p>Vector de Términos Independientes: {{ messageVecIndependienteJacobi }}</p>
    <input v-model="messageVecIndependienteJacobi" placeholder="" />
    <p>X inicial: {{ messageXInicialJacobi }}</p>
    <input v-model="messageXInicialJacobi" placeholder="" />
    <p>Tolerancia: {{ messageToleranciaJacobi }}</p>
    <input v-model="messageToleranciaJacobi" placeholder="" />
    <p>Número máximo de iterciones: {{ messageNMaxJacobi }}</p>
    <input v-model="messageNMaxJacobi" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>