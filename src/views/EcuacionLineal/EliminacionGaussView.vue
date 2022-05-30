<template>
  <div class="eliminacionGauss">
    <h1>Eliminación Gausseana</h1>
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Vector de Términos Independientes: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>