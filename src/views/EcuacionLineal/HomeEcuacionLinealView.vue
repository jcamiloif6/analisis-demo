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
    > 
    <p></p>
    <router-link to="/EcuacionLineal/eliminacionGaussPivoteoParcial" tag="button"
      >Elimnación Gausseana Pivoteo Parcial</router-link
    > |
    <router-link to="/EcuacionLineal/eliminacionGaussPivoteoTotal" tag="button"
      >Elimnación Gausseana Pivoteo Total</router-link
    > 
    <p></p>
  </div>
</template>