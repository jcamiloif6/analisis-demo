<template>
  <div class="secante">
    <h1>Método de Secante</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>X inicial: {{ x0 }}</p>
    <input v-model="x0" placeholder="" />
    <p>X final: {{ x1 }}</p>
    <input v-model="x1" placeholder="" />
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
      fn: "(E**x)-(5*x)+2",
      x0: 0.5,
      x1: 1,
      tol: 10E-05,
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
        '/api/secante',
        {fn: this.$data.fn,
        x0: parseInt(this.$data.x0),
        x1: parseInt(this.$data.x1),
        tol: parseFloat(this.$data.tol),
        nMax: parseInt(this.$data.nMax)},
        { headers })
        .then(response => (this.solution = response.data));
    }
  }
})
</script>
