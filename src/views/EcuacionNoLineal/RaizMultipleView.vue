<template>
  <div class="raizultiple">
    <h1>Método de Raíces Multiples</h1>
    <button>Button</button> |
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Primera derivada de la función: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Segunda derivada de la función: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>X Inicial: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Tolerancia: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Número Máximo de Iteraciones: {{ message }}</p>
    <input v-model="message" placeholder="" />
  </div>
</template>