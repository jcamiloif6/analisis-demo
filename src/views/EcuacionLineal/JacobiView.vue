<template>
  <div class="jacobi">
    <h1>Método de Jacobbi</h1>
    <button>Button</button> |
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Vector de Términos Independientes: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>X inicial: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Tolerancia: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Número máximo de iterciones: {{ message }}</p>
    <input v-model="message" placeholder="" />
  </div>
</template>