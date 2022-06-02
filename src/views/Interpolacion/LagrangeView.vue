<template>
  <div class="lagrange">
    <h1>Lagrange</h1>
    <router-link to="/Interpolacion/homeInterpolacion" tag="button"
      >Otros métodos de Interpolación</router-link
    >
    <p>Coordenadas x: {{ messageCoordXLagrange }}</p>
    <input v-model="messageCoordXLagrange" placeholder="" />
    <p>Coordenadas y: {{ messageCoordYLagrange }}</p>
    <input v-model="messageCoordYLagrange" placeholder="" />
    <p>Nuevo punto a encontrar: {{ messageNPLagrange }}</p>
    <input v-model="messageNPLagrange" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>