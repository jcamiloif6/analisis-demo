<template>
  <div class="biseccion">
    <h1>Bisección</h1>
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
    <p>Tolerancia: {{ crit }}</p>
    <input v-model="crit" placeholder="" />
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
      fn: "x^3-(4*x^2)-10",
      a: 1,
      b: 2,
      crit: 0.0001,
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
        '/api/bisection',
        {fn: this.$data.fn,
        a: parseInt(this.$data.a),
        b: parseInt(this.$data.b),
        crit: parseFloat(this.$data.crit),
        nMax: parseInt(this.$data.nMax)},
        { headers })
        .then(response => (this.solution = response.data));
    }
  }
})
</script>
