<template>
  <div class="biseccion">
    <h1>Bisección</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>X inicial: {{ messageXInicialBiseccion }}</p>
    <input v-model="messageXInicialBiseccion" placeholder="" />
    <p>X final: {{ messageXFinalBiseccion }}</p>
    <input v-model="messageXFinalBiseccion" placeholder="" />
    <p>Tolerancia: {{ messageToleranciaBiseccion }}</p>
    <input v-model="messageToleranciaBiseccion" placeholder="" />
    <p>Función: {{ messageFuncionBiseccion }}</p>
    <input v-model="messageFuncionBiseccion" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
    <p></p>
    <!--<table class="table stripped bordered">
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
    </table>-->
  </div>
</template>

