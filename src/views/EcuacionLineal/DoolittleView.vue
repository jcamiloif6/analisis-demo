<template>
  <div class="doolittle">
    <h1>Factorización por Doolittle</h1>
    <button>Button</button> |
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Vector de Términos Independientes: {{ message }}</p>
    <input v-model="message" placeholder="" />
  </div>
</template>