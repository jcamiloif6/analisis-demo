<template>
  <div class="busquedaIncremental">
    <h1>Búsquedas Incrementales</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>X Inicial: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Delta de X: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Número Máximo de Iteraciones: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>