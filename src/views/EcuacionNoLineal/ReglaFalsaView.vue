<template>
  <div class="reglaFalsa">
    <h1>Método de Regla Falsa</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>X inicial: {{ a }}</p>
    <input v-model="a" placeholder="" />
    <p>X final: {{ b }}</p>
    <input v-model="b" placeholder="" />
    <p>Función: {{ fn }}</p>
    <input v-model="fn" placeholder="" />
    <p></p>
    <p>Tolerancia: {{ tol }}</p>
    <input v-model="tol" placeholder="" />
    <p>Máximo iteraciones: {{ nMax }}</p>
    <input v-model="nMax" placeholder="" />
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
    <p><strong>Respuesta: </strong>{{ solution['response'] }}</p>
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
      a: 1,
      b: 3,
      tol: 0.005,
      nMax: 30,
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
        '/api/regla-falsa',
        {fn: this.$data.fn,
        a: parseInt(this.$data.a),
        b: parseInt(this.$data.b),
        tol: parseFloat(this.$data.tol),
        nMax: parseInt(this.$data.nMax)},
        { headers })
        .then(response => (this.solution = response.data));
    }
  }
})
</script>
