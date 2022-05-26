<template>
  <div class="homeEcuacionLineal">
    <h1>Ecuaciones Lineales</h1>
    <router-link to="/EcuacionLineal/eliminacionGauss" tag="button"
      >Eliminación Gausseana</router-link
    > |
    <router-link to="/EcuacionLineal/cholesky" tag="button"
      >Factorización por Cholesky</router-link
    > |
    <router-link to="/EcuacionLineal/crout" tag="button"
      >Factorización por Crout</router-link
    > |
    <router-link to="/EcuacionLineal/doolittle" tag="button"
      >Factorización por Doolittle</router-link
    > |
    <router-link to="/EcuacionLineal/gaussSeidel" tag="button"
      >Gauss-Seidel</router-link
    > |
    <router-link to="/EcuacionLineal/jacobi" tag="button"
      >Jacobbi</router-link
    > |
    <router-link to="/EcuacionLineal/luSimple" tag="button"
      >Factorización LU Simple</router-link
    > |
    <p></p>
    <router-link to="/EcuacionLineal/sustProgresiva" tag="button"
      >Sustitución Progresiva</router-link
    > |
    <router-link to="/EcuacionLineal/sustRegresiva" tag="button"
      >Sustitución Regresiva</router-link
    > 
  </div>
</template>