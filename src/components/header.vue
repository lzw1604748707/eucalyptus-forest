
  <template>
  <div>
    <v-app-bar color="amber darken-2"
      dark>
      <v-toolbar-title>Eucalyptus-forest</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar color="indigo"
        size="35">
        <img v-if="userInfo.avatar"
          :src="userInfo.avatar">
        <span v-else-if="userInfo.name"
          class="white--text headline">{{userInfo.name|firstName}}</span>
        <v-icon v-else
          dark>mdi-account-circle</v-icon>
      </v-avatar>
      <v-menu left
        bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon
            v-on="on">
            <v-icon>mdi-settings-outline</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5"
            :key="n"
            @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      userInfo: {
        name: ' 二郎',
        avatar: require('@/assets/logo.svg')
      }
    }
  },
  computed: {},
  filters: {
    firstName(name) {
      return name.trim().substring(0, 1)
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
</style>
