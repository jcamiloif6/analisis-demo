<template>
  <div class="difDivididas">
    <h1>Diferencias Divididas</h1>
    <router-link to="/Interpolacion/homeInterpolacion" tag="button"
      >Otros métodos de Interpolación</router-link
    >
    <p>Abscisas(X): {{ X }}</p>
    <input v-model="X" placeholder="" />
    <p>Ordenadas (Y): {{ Y }}</p>
    <input v-model="Y" placeholder="" />
    <p>Nuevo punto a encontrar: {{ r }}</p>
    <input v-model="r" placeholder="" />
    <p></p>
    <button v-on:click="answer">Calcular</button>
    <div v-if="solution">
    <p>Respuesta</p>
      <ul style="width: 20%; margin: 0px auto; list-style: none;">
        <li v-for="(value, fila) in solution['a']" :key="fila">
          <strong>A({{ fila }}): </strong>{{ value.toLocaleString() }}
        </li>
      </ul>
      <p></p>
      <p><strong>p: </strong>{{ solution['p'] }}</p>
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
      r: null,
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
        '/api/interpolacion-newton',
        {X: JSON.parse(this.$data.X),
         Y: JSON.parse(this.$data.Y),
         r: (this.$data.r || this.$data.r == "") ? parseInt(this.$data.r) : this.$data.r},
        { headers })
        .then(response => (this.solution = response.data));
    }
  }
})
</script>
