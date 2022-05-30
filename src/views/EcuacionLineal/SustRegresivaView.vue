<template>
  <div class="sustRegresiva">
    <h1>Sustitución Regresiva</h1>
    <button>Button</button> |
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ message }}</p>
    <input v-model="message" placeholder="" />
  </div>
</template>