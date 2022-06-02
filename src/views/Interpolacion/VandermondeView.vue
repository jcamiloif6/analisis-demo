<template>
  <div class="vandermonde">
    <h1>Vandermonde</h1>
    <router-link to="/Interpolacion/homeInterpolacion" tag="button"
      >Otros métodos de Interpolación</router-link
    >
    <p>Coordenadas en x: {{ messageCoordXVandermonde }}</p>
    <input v-model="messageCoordXVandermonde" placeholder="" />
    <p>Coordenadas en y: {{ messageCoordYVandermonde }}</p>
    <input v-model="messageCoordYVandermonde" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>