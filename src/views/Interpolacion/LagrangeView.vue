<template>
  <div class="lagrange">
    <h1>Lagrange</h1>
    <router-link to="/Interpolacion/homeInterpolacion" tag="button"
      >Otros métodos de Interpolación</router-link
    >
    <p>Coordenadas x,y: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>