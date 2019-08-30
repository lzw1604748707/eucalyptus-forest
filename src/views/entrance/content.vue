<template>
  <v-content>
    <v-container fluid
      fill-height>
      <div class="forest">
        <div class="forest-panel panel-theme">
          <div class="card card-theme">
            <span class="card__title theme__title">看否</span>
          </div>
        </div>
        <div></div>
      </div>
    </v-container>
  </v-content>

</template>

<script>
import themeOptionList from '@/scss/themeOptionList.js'
import moment from 'moment'
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    currentPeriod() {
      let currentHour = moment().hour()
      console.log(currentHour)
      if (currentHour > 22 && currentHour < 4) {
        return 'night'
      } else if (currentHour > 16) {
        return 'evening'
      } else if (currentHour > 10) {
        return 'afternoon'
      } else if (currentHour > 4) {
        return 'morning'
      }
      return 'morning'
    }
  },
  methods: {
    getCurrentTheme() {
      console.log(themeOptionList[this.currentPeriod]['--theme-primary'])

      document.body.style.setProperty(
        '--theme-primary',
        themeOptionList[this.currentPeriod]['--theme-primary']
      )
    }
  },
  mounted() {
    this.getCurrentTheme()
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/theme.scss';
.forest {
  width: 100%;
  height: 100%;
  &-panel {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .panel-theme {
    background: var(--theme-primary);
  }
  .card {
    width: 250px;
    height: 200px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-theme {
      box-shadow: 0px 0px 5px 4px #fff;
    }
    &__title {
      width: 60px;
      text-align: center;
      border-radius: 5px;
      font-size: 20px;
    }
  }
}
</style>
