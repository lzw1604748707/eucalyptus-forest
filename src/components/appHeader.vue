<template>
  <v-app-bar app
    color="blue darken-3"
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
