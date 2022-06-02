<template>
  <div class="raizultiple">
    <h1>Método de Raíces Multiples</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ messageFuncionRaizMultiple }}</p>
    <input v-model="messageFuncionRaizMultiple" placeholder="" />
    <p>X Inicial: {{ messageXInicialRaizMultiple }}</p>
    <input v-model="messageXInicialRaizMultiple" placeholder="" />
    <p>Tolerancia: {{ messageToleranciaRaizMultiple }}</p>
    <input v-model="messageToleranciaRaizMultiple" placeholder="" />
    <p>Número Máximo de Iteraciones: {{ messageNMaxRaizMultiple }}</p>
    <input v-model="messageNMaxRaizMultiple" placeholder="" />
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