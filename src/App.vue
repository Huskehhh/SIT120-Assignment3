<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import Index from "@/components/Index";

export default {
  name: 'App',
  components: {
    Index
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body {
  height: 100%;
  background: linear-gradient(to bottom, rgba(93, 78, 67, 0.9) 0%, rgba(93, 78, 67, 0.9) 100%), url("assets/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

h3, h1, p {
  color: rgba(255, 255, 255, .7);
}

h3 {
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  white-space: nowrap;
}

.nav > a:hover {
  background-color: #333;
}

a:hover {
  color: #d6370c;
  text-decoration: underline
}
</style>
