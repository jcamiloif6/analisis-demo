<template>
  <div class="eliminacionGauss">
    <h1>Eliminación Gausseana</h1>
    <router-link to="/EcuacionLineal/homeEcuacionLineal" tag="button"
      >Otros métodos de Ecuaciones Lineales</router-link
    >
    <p>Matríz: {{ A }}</p>
    <input v-model="A" placeholder="" />
    <p>Vector de Términos Independientes: {{ b }}</p>
    <input v-model="b" placeholder="" />
    <p></p>
    <button v-on:click="answer">Calcular</button>
    <div v-if="solution">
    <div>
      <p>Pasos</p>
      <table v-for="paso in solution['pasos']" :key="paso"
      style="width: 20%; margin: 20px auto; border-width: 1px;">
        <tbody>
          <tr v-for="fila in paso" :key="fila">
            <td v-for="columna in fila" :key="columna"
            style="border-width: 1px;">
            {{ columna }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <table style="width: 20%; margin: 20px auto; border-width: 1px;">
        <tbody>
          <tr v-for="fila in solution['response']['Ab']" :key="fila">
            <td v-for="columna in fila" :key="columna"
            style="border-width: 1px;">
            {{ columna }}
            </td>
          </tr>
        </tbody>
      </table>
    <ul style="width: 20%; margin: 0px auto; list-style: none;">
        <li v-for="(value, fila) in solution['response']['x']" :key="fila">
          <strong>X({{ fila }}): </strong>{{ value }}
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
      A: "[[14, 6, -2, 3],[3, 15, 2, -5],[-7, 4, -23, 2],[1, -3, -2, 16]]",
      b: "[12, 32, -24, 14]",
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
        '/api/gauss-simple',
        {A: JSON.parse(this.$data.A),
         b: JSON.parse(this.$data.b)},
        { headers })
        .then(response => (this.solution = response.data));
    }
  }
})
</script>
