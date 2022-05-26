<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/metodos">Métodos Numéricos</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c4350;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: rgb(231, 239, 241);
  background-color:rgb(87, 79, 196);
  border-radius: 4px;
  font-size: 14px;
  font-family: '微软雅黑',arail;
  cursor: pointer;
}
</style>
