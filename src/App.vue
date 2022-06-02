<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
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

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid rgb(58, 49, 175);
}

thead, tfoot {
  color: rgba(20, 19, 19, 0.589);
}

th, td {
  padding: 5px;
  border-collapse: collapse;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
  border: 3px solid rgb(58, 49, 175);
}
</style>

<script>
  export default {
    data () {
      return {
        message1: 'Hey!',
        message2: 'Hey!',
        message3: 'Hey!',
        message4: 'Hey!',
      }
    },
  }

</script>
