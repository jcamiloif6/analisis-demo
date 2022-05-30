<template>
  <div class="sustRegresiva">
    <h1>Sustitución Regresiva</h1>
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>