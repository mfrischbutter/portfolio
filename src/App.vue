<template>
  <div class="columns">
    <div class="column is-flex is-cadet is-full-height">
      <Router/>
      <div class="title is-2 name">
        Michael Frischbutter
      </div>
    </div>
    <div class="column is-flex is-full-height">
      bc
    </div>
    <div class="column is-flex is-full-height">
      cd
    </div>
  </div>
</template>

<style>
.column{
  padding:0 0.75rem !important;
}
.columns {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
}

.is-flex {
  display: flex;
}

.is-cadet {
  background-color: #5C6D70;
  color: white;
}

.is-full-height {
  height: 100vh;
  flex-direction: column;
}
</style>

<script>
import Router from '@/components/Router.vue'

export default {
  name: 'App',
  components: {
    Router
  }
}
</script>