<template>
  <v-app>
    <entrance-header></entrance-header>
    <entrance-content></entrance-content>
  </v-app>
</template>

<script>
import entranceHeader from '@/components/header'
import entranceContent from './content'
export default {
  components: {
    entranceHeader,
    entranceContent
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
</style>
