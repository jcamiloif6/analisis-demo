<template>
  <div class="busquedaIncremental">
    <h1>Búsquedas Incrementales</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ fn }}</p>
    <input type="text" v-model="fn" placeholder="" />
    <p>X Inicial: {{ x0 }}</p>
    <input type="number" v-model="x0" placeholder="" />
    <p>Delta de X: {{ h }}</p>
    <input type="number" v-model="h" placeholder="" />
    <p>Número Máximo de Iteraciones: {{ nMax }}</p>
    <input type="number" v-model="nMax" placeholder="" />
    <p></p>
    <button v-on:click="answer">Calcular</button>
    <div v-if="solution">
    <div>
      <p>Pasos</p>
      <ul>
        <li v-for="paso in solution['pasos']" :key="paso">
        {{ paso }}
        </li>
      </ul>
    </div>
    <p>Respuesta: {{ solution['response'] }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      fn: "x^3-(7.51*(x^2))+(18.42*x)-14.83",
      x0: 1,
      h: 0.5,
      nMax: 100,
      solution: null
    }
  },
  methods: {
    answer() {
      const headers = {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        }
      axios.post(
        '/api/busquedas-incrementales',
        {fn: this.$data.fn,
        x0: parseInt(this.$data.x0),
        h: parseFloat(this.$data.h),
        nMax: parseInt(this.$data.nMax)},
        { headers })
        .then(response => (this.solution = response.data));
    }
  }
})
</script>