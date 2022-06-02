<template>
  <div class="difDivididas">
    <h1>Diferencias Divididas</h1>
    <router-link to="/Interpolacion/homeInterpolacion" tag="button"
      >Otros métodos de Interpolación</router-link
    >
    <p>Coordenadas x: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Coordenadas y: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Nuevo punto a encontrar: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>