<template>
  <div class="gauss-seidel">
    <h1>Método de Gauss-Seidel</h1>
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ A }}</p>
    <input v-model="A" placeholder="" />
    <p>Vector de Términos Independientes: {{ b }}</p>
    <input v-model="b" placeholder="" />
    <p>X inicial: {{ x0 }}</p>
    <input v-model="x0" placeholder="" />
    <p>Tolerancia: {{ tol }}</p>
    <input v-model="tol" placeholder="" />
    <p>Número máximo de iteraciones: {{ nMax }}</p>
    <input v-model="nMax" placeholder="" />
    <p></p>
    <button v-on:click="answer">Calcular</button>
    <div v-if="solution">
    <div>
      <p>Pasos</p>
      <div v-for="(paso, index) in solution['pasos']" :key="index">
      <h3>Paso {{ index }}</h3>
      <ul style="width: 20%; margin: 0px auto; list-style: none;">
        <li v-for="(value, fila) in paso['x']" :key="fila">
          <strong>X({{ fila }}): </strong>{{ value.toLocaleString() }}
        </li>
      </ul>
      <p><strong>Error: </strong>{{ solution['response']['err'] }}</p>
      </div>
    </div>
    <p>Respuesta</p>
      <p><strong>Iteracion: </strong>{{ solution['response']['i'] }}</p>
      <p><strong>Error: </strong>{{ solution['response']['err'] }}</p>
      <p></p>
      <ul style="width: 20%; margin: 0px auto; list-style: none;">
        <li v-for="(value, fila) in solution['response']['x']" :key="fila">
          <strong>X({{ fila }}): </strong>{{ value.toLocaleString() }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      A: "[[45, 13, -4, 8],[-5, 28, 4, -14],[9, 15, 63, -7],[2, 3, -8, 42]]",
      b: "[25, 82, 75, -43]",
      x0: "[2, 2, 2, 2]",
      tol: 10E-5,
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
        '/api/gauss-seidel',
        {A: JSON.parse(this.$data.A),
         b: JSON.parse(this.$data.b),
         x0: JSON.parse(this.$data.x0),
         tol: parseFloat(this.$data.tol),
         nMax: parseInt(this.$data.nMax)},
        { headers })
        .then(response => (this.solution = response.data));
    }
  }
})
</script>
