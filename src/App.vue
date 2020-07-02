<template>
  <v-app ref="app">
    <app-header class="app__header"></app-header>
    <v-main>
      <v-container class="fill-height">
        <v-row justify="center"
          align-content-lg="center">
          <v-col :cols="12"
            :lg="8">
            <card-list></card-list>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <app-footer class="app__footer"></app-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
const CanvasNest = require('canvas-nest.js')
export default Vue.extend({
  name: 'App',

  components: {
    appHeader: () => import('@/components/appHeader.vue'),
    cardList: () => import('@/components/cardList.vue'),
    appFooter: () => import('@/components/appFooter.vue')
  },

  data: () => ({
    particleLine: null
  }),
  methods: {
    generateParticle() {
      this.particleLine && (this.particleLine as typeof CanvasNest).destroy()
      const count = Math.ceil(window.innerWidth / 9)
      this.particleLine = new CanvasNest(document.body, {
        color: '235,235,235',
        pointColor: '255,255,255',
        opacity: 0.8,
        zIndex: -1,
        count
      })
    }
  },

  created() {
    this.generateParticle()
    window.onresize = this.generateParticle
  }
})
</script>
<style lang="scss" scoped>
@import '~@/scss/var.scss';
#app {
  width: 100vw;
  height: 100vh;
  background: transparent;
  .app__header {
    // background: lighten(rgba($background-color, 0.3), 20%);
    background: lighten(rgba($background-color, 0.3), 20%);
  }
  .app__footer {
    background: lighten(rgba($background-color, 0.3), 20%);
  }
}
</style>
