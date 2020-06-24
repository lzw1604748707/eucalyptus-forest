<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      没有
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App',

  components: {
    appHeader: () => import('@/components/appHeader.vue')
  },

  data: () => ({
    //
  })
})
</script>
