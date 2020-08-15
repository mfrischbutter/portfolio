<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <router-link class="navbar-item" to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  width: 100%;
  height: 10vh;
  max-height: 80px;
  background-color: #5c6d70 !important;
}
.navbar-burger{
  margin-left: 0 !important;
}
</style>

<script>
export default {
  name: "Router",
};
</script>