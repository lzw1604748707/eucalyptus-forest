<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(card,index) of cardList"
        :key="index"
        :cols="card.cols"
        :sm="card.sm"
        :lg="card.lg">
        <v-card hover
          @click="onPushWebClick(card.website)">
          <v-img class="white--text align-end "
            :src="card.cover">
            <v-card-title>{{card.name}}</v-card-title>
          </v-img>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class CardList extends Vue {
  cardList = [
    {
      cols: 6,
      sm: 4,
      lg: 3,
      website: 'https://www.baidu.com',
      name: '百度',
      cover: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
    },
    {
      cols: 6,
      sm: 4,
      lg: 3,
      website: 'https://www.baidu.com',
      name: '百度',
      cover: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
    },
    {
      cols: 6,
      sm: 4,
      lg: 3,
      website: 'https://www.baidu.com',
      name: '百度',
      cover: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
    },
    {
      cols: 6,
      sm: 4,
      lg: 3,
      website: 'https://www.baidu.com',
      name: '百度',
      cover: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
    }
  ]

  onPushWebClick(website: string) {
    location.href = website
  }
}
</script>

<style lang="scss" scoped>
</style>
