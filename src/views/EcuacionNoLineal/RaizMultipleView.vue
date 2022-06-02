<template>
  <div class="raizultiple">
    <h1>Método de Raíces Multiples</h1>
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ fn }}</p>
    <input v-model="fn" placeholder="" />
    <p>X Inicial: {{ x0 }}</p>
    <input v-model="x0" placeholder="" />
    <p>Tolerancia: {{ tol }}</p>
    <input v-model="tol" placeholder="" />
    <p>Número Máximo de Iteraciones: {{ nMax }}</p>
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
        '/api/raices-multiples',
        {fn: this.$data.fn,
        x0: parseInt(this.$data.x0),
        tol: parseFloat(this.$data.tol),
        nMax: parseInt(this.$data.nMax)},
        { headers })
        .then(response => (this.solution = response.data));
    }
  }
})
</script>
