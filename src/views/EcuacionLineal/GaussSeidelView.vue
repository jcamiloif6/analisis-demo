<template>
  <div class="gauss-seidel">
    <h1>Método de Gauss-Seidel</h1>
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ messageMatrizGaussSeidel }}</p>
    <input v-model="messageMatrizGaussSeidel" placeholder="" />
    <p>Vector de Términos Independientes: {{ messageVecIndependienteGaussSeidel }}</p>
    <input v-model="messageVecIndependienteGaussSeidel" placeholder="" />
    <p>X inicial: {{ messageXInicialGaussSeidel }}</p>
    <input v-model="messageXInicialGaussSeidel" placeholder="" />
    <p>Tolerancia: {{ messageToleranciaGaussSeidel }}</p>
    <input v-model="messageToleranciaGaussSeidel" placeholder="" />
    <p>Número máximo de iterciones: {{ messageNMaxGaussSeidel }}</p>
    <input v-model="messageNMaxGaussSeidel" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>