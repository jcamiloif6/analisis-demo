<template>
  <div class="biseccion">
    <h1>Bisección</h1>
    <button>Button</button> |
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>X inicial: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>X final: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Tolerancia: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Función: {{ message }}</p>
    <input v-model="message" placeholder="" />
  </div>
</template>

