<template>
  <div class="biseccion">
    <h1>Bisección</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>X inicial: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>X final: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Tolerancia: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Función: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
    <p></p>
    <table class="table stripped bordered">
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
    </table>
  </div>
</template>

