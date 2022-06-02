<template>
  <div class="crout">
    <h1>Factorización por Crout</h1>
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
      <div v-for="(paso, index) in solution['pasos']" :key="index">
      <h3>Paso {{ index }}</h3>
      <table style="width: 20%; margin: 20px auto; border-width: 1px;">
        <thead>
          <tr>
            <th>L</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fila in paso['L']" :key="fila">
            <td v-for="columna in fila" :key="columna"
            style="border-width: 1px;">
            {{ columna.toLocaleString() }}
            </td>
          </tr>
        </tbody>
      </table>
      <table style="width: 20%; margin: 20px auto; border-width: 1px;">
        <thead>
          <tr>
            <th>U</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fila in paso['U']" :key="fila">
            <td v-for="columna in fila" :key="columna"
            style="border-width: 1px;">
            {{ columna.toLocaleString() }}
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <p>Respuesta</p>
      <table style="width: 20%; margin: 20px auto; border-width: 1px;">
        <thead>
          <tr>
            <th>A</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fila in solution['response']['A']" :key="fila">
            <td v-for="columna in fila" :key="columna"
            style="border-width: 1px;">
            {{ columna.toLocaleString() }}
            </td>
          </tr>
        </tbody>
      </table>
      <table style="width: 20%; margin: 20px auto; border-width: 1px;">
      <thead>
          <tr>
            <th>L</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fila in solution['response']['L']" :key="fila">
            <td v-for="columna in fila" :key="columna"
            style="border-width: 1px;">
            {{ columna.toLocaleString() }}
            </td>
          </tr>
        </tbody>
      </table>
      <table style="width: 20%; margin: 20px auto; border-width: 1px;">
      <thead>
          <tr>
            <th>U</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fila in solution['response']['U']" :key="fila">
            <td v-for="columna in fila" :key="columna"
            style="border-width: 1px;">
            {{ columna.toLocaleString() }}
            </td>
          </tr>
        </tbody>
      </table>
      <ul style="width: 20%; margin: 0px auto; list-style: none;">
        <li v-for="(value, fila) in solution['response']['z']" :key="fila">
          <strong>Z({{ fila }}): </strong>{{ value.toLocaleString() }}
        </li>
      </ul>
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
      A: "[[6, 3, 4, 8], [3, 6, 5, 1], [4, 5, 10, 7], [8, 1, 7, 25]]",
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
        '/api/crout',
        {A: JSON.parse(this.$data.A),
         b: JSON.parse(this.$data.b)},
        { headers })
        .then(response => (this.solution = response.data));
    }
  }
})
</script>
