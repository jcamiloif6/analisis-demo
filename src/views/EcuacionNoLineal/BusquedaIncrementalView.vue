<template>
  <div class="busquedaIncremental">
    <h1>Búsquedas Incrementales</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ messageFuncionBusquedaIncremental }}</p>
    <input v-model="messageFuncionBusquedaIncremental" placeholder="" />
    <p>X Inicial: {{ messageXInicialBusquedaIncremental }}</p>
    <input v-model="messageXInicialBusquedaIncremental" placeholder="" />
    <p>Delta de X: {{ messageDeltaXBusquedaIncremental }}</p>
    <input v-model="messageDeltaXBusquedaIncremental" placeholder="" />
    <p>Número Máximo de Iteraciones: {{ messageNMaxBusquedaIncremental }}</p>
    <input v-model="messageNMaxBusquedaIncremental" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
  </div>
</template>