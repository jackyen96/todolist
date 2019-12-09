<template>
  <div id="app">
    <TodoListHead @addNew="addNew"/>    
    <MainView/>
  </div>
</template>

<script>
import TodoListHead from "./components/TodoListHead"
import MainView from './views/MainView'


export default {
  name: "app",
  components: {
    TodoListHead,
    MainView
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
