<template>
  <div class="newton">
    <h1>Método de Newton</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ messageFuncionNewton }}</p>
    <input v-model="messageFuncionNewton" placeholder="" />
    <p>X Inicial: {{ messageXInicialNewton }}</p>
    <input v-model="messageXInicialNewton" placeholder="" />
    <p>Número de Iteraciones: {{ messageNMaxNewton }}</p>
    <input v-model="messageNMaxNewton" placeholder="" />
    <p>Tolerancia: {{ messageToleranciaNewton }}</p>
    <input v-model="messageToleranciaNewton" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
    <p></p>
    <!-- <table class="table stripped bordered">
      <thead>
        <tr>
          <th>Iteracion</th>
          <th>Xi</th>
          <th>F(xi)</th>
          <th>Error</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>