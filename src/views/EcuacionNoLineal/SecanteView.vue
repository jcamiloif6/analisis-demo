<template>
  <div class="secante">
    <h1>Método de Secante</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>X Inicial: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>X Final: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Tolerancia: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p>Número de Iteraciones: {{ message }}</p>
    <input v-model="message" placeholder="" />
    <p></p>
    <router-link to="" tag="button">Calcular</router-link>
    <p></p>
    <table class="table stripped bordered">
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
    </table>
  </div>
</template>