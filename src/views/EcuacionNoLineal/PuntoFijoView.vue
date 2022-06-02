<template>
  <div class="puntoFijo">
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ messageFuncionPuntoFijo }}</p>
    <input v-model="messageFuncionPuntoFijo" placeholder="" />
    <p>X Inicial: {{ messageXInicialPuntoFijo }}</p>
    <input v-model="messageXInicialPuntoFijo" placeholder="" />
    <p>Número de Iteraciones: {{ messageNMaxPuntoFijo }}</p>
    <input v-model="messageNMaxPuntoFijo" placeholder="" />
    <p>Tolerancia: {{ messageToleranciaPuntoFijo }}</p>
    <input v-model="messageToleranciaPuntoFijo" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
    <p></p>
    <!-- <table class="table stripped bordered">
      <thead>
        <tr>
          <th>Iteracion</th>
          <th>Xi</th>
          <th>G(xi)</th>
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
          <td></td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>