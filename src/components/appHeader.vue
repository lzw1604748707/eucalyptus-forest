<template>
  <v-app-bar app
    elevate-on-scroll
    dark>
    <v-toolbar-title>
      <span>桉树林</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon
      large>
      <v-avatar size="32px"
        item>
        <v-img v-if="user.avatar"
          :src="user.avatar"
          :alt="user.name"></v-img>
        <span v-else-if="user.name">{{user.name.slice(0,1)}}</span>
        <v-icon v-else
          dark>mdi-account-circle</v-icon>
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {State} from 'vuex-class'

@Component
export default class AppHeader extends Vue {
  @State user!: object
}
</script>


<style lang="scss" scoped>
</style>
