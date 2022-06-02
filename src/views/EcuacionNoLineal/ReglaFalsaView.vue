<template>
  <div class="reglaFalsa">
    <h1>Método de Regla Falsa</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ messageFuncionReglaFalsa }}</p>
    <input v-model="messageFuncionReglaFalsa" placeholder="" />
    <p>X Inicial: {{ messageXInicialReglaFalsa }}</p>
    <input v-model="messageXInicialReglaFalsa" placeholder="" />
    <p>X Final: {{ messageXFinalReglaFalsa }}</p>
    <input v-model="messageXFinalReglaFalsa" placeholder="" />
    <p>Tolerancia: {{ messageToleranciaReglaFalsa }}</p>
    <input v-model="messageToleranciaReglaFalsa" placeholder="" />
    <p>Número de Iteraciones: {{ messageNMaxReglaFalsa }}</p>
    <input v-model="messageNMaxReglaFalsa" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
    <p></p>
    <!-- <table class="table stripped bordered">
      <thead>
        <tr>
          <th>Iteracion</th>
          <th>Xi</th>
          <th>Xm</th>
          <th>Xf</th>
          <th>F(xm)</th>
          <th>Error</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>