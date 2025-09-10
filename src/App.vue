<template>
  <router-link to="/">SelectSearchable</router-link>
  <span> | </span>
  <router-link to="/select-remote-method">SelectRemoteMethod</router-link>
  <span> | </span>
  <router-link to="/select-remote-searchable">SelectRemoteSearchable</router-link>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
