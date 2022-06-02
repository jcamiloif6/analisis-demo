<template>
  <div class="puntoFijo">
    <router-link to="/EcuacionNoLineal/homeEcuacionNoLineal" tag="button"
      >Otros métodos de Ecuaciones No Lineales</router-link
    >
    <p>Función: {{ gn }}</p>
    <input v-model="gn" placeholder="" />
    <p>X Inicial: {{ x0 }}</p>
    <input v-model="x0" placeholder="" />
    <p>Número de Iteraciones: {{ nMax }}</p>
    <input v-model="nMax" placeholder="" />
    <p>Tolerancia: {{ tol }}</p>
    <input v-model="tol" placeholder="" />
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
      gn: "(x*E**x-x**2-3)/5",
      x0: -0.5,
      tol: 0.00005,
      nMax: 10,
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
        '/api/punto-fijo',
        {gn: this.$data.gn,
        x0: parseInt(this.$data.x0),
        tol: parseFloat(this.$data.tol),
        nMax: parseInt(this.$data.nMax)},
        { headers })
        .then(response => (this.solution = response.data));
    }
  }
})
</script>
