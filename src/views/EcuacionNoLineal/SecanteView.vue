<template>
  <div class="secante">
    <h1>Método de Secante</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ messageFuncionSecante }}</p>
    <input v-model="messageFuncionSecante" placeholder="" />
    <p>X Inicial: {{ messageXInicialSecante }}</p>
    <input v-model="messageXInicialSecante" placeholder="" />
    <p>X Final: {{ messageXFinalSecante }}</p>
    <input v-model="messageXFinalSecante" placeholder="" />
    <p>Tolerancia: {{ messageToleranciaSecante }}</p>
    <input v-model="messageToleranciaSecante" placeholder="" />
    <p>Número de Iteraciones: {{ messageNMaxSecante }}</p>
    <input v-model="messageNMaxSecante" placeholder="" />
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