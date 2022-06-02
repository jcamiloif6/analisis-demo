<template>
  <div class="vandermonde">
    <h1>Vandermonde</h1>
    <router-link to="/Interpolacion/homeInterpolacion" tag="button"
      >Otros métodos de Interpolación</router-link
    >
    <p>Abscisas(X): {{ X }}</p>
    <input v-model="X" placeholder="" />
    <p>Ordenadas (Y): {{ Y }}</p>
    <input v-model="Y" placeholder="" />
    <p></p>
    <button v-on:click="answer">Calcular</button>
    <div v-if="solution">
    <div>
      <p>Respuesta</p>
      <table style="width: 60%; margin: 20px auto; border-width: 1px;">
        <tbody>
          <tr v-for="fila in solution['response']['vandermonde']" :key="fila">
            <td v-for="columna in fila" :key="columna"
            style="border-width: 1px;">
            {{ columna.toLocaleString() }}
            </td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <ul style="width: 20%; margin: 0px auto; list-style: none;">
        <li v-for="(value, fila) in solution['response']['a']" :key="fila">
          <strong>a({{ fila }}): </strong>{{ value }}
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      X: "[1, 1.2, 1.4, 1.6, 1.8, 2]",
      Y: "[0.6747, 0.8491, 1.1214, 1.4921, 1.9607, 2.5258]",
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
        '/api/vandermonde',
        {X: JSON.parse(this.$data.X),
         Y: JSON.parse(this.$data.Y)},
        { headers })
        .then(response => (this.solution = response.data));
    }
  }
})
</script>
