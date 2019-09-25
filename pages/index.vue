<template lang="pug">
  section.home-page-container
    parallax(justify-content="center" :src="headerImage" :modifier="1.2" :show-downward-icon="true")
      card.elevation-large(slot="fixed" color="primary" :ghost="true")
        h1(slot="title")
          no-ssr
            animated-typed-text(:text="['Dat Nguyen Repository']" :options="textOptions")

    banner(color="accent" :displayArrow="true" ref="topBanner")
      h3(slot="title") Hi, I am Dat Nguyen.
      p(slot="text") This is a repository of some of my projects I've made over the last few years.

    parallax(justify-content="end" :src="cssPlaygroundImage" :modifier="1.2")
      card.elevation-medium(slot="fixed" width="30em" color="primary")
        h2.text-underline-accent.inline-block(slot="title") CSS Playground
        div(slot="text") 
          p.text-center A web app that makes <a href="http://css-playground.com">learning CSS</a> fun with playful sliders and select boxes.

    banner(color="primary" :displayArrow="true")
      h3(slot="title") In my free time I create websites.
      div(slot="text")
        p I focus on creating responsive and interactive websites. 
        p Javascript frameworks like Aurelia, Vue and Angular help me achieve that.

    parallax(justify-content="start" :src="stealthGameImage" :modifier="1.2")
      card.elevation-medium(slot="fixed" width="30em" color="accent")
        h2.text-underline-primary.inline-block(slot="title") Stealth Game
        div(slot="text") 
          p.text-center Made in Unreal Engine 4, Stealth game is a cat/mouse game where you can use tools and abilities to sneak past and dodge enemies. <a href="https://github.com/itsdatnguyen/stealth-game">Github</a>

    banner(color="accent" :displayArrow="true")
      h3(slot="title") I've also created some games.
      div(slot="text")
        p I've used Unreal Engine 4, Unity and Game Maker.
        p It's the feeling of seeing and enjoying my finished projects that motivate me.

    parallax(justify-content="end" :src="redsAdventureImage" :modifier="1.2")
      card.elevation-medium(slot="fixed" width="30em" color="primary")
        h2.text-underline-accent.inline-block(slot="title") Red's Adventure
        div(slot="text") 
          p.text-center Made in Game Maker, Red's Adventure is a platforming, action based game that rewards good reaction time. <a href="https://github.com/itsdatnguyen/reds-adventure">Github</a>

    banner(color="primary" :displayArrow="true")
      h3(slot="title") I use lots of tools.
      div(slot="text")
        p Typescript, Webpack, NPM, Sass, Git and Pug give me must-have productivity boosts.

    parallax(justify-content="start" :src="utilityImage" :modifier="1.2")
      card.elevation-medium(slot="fixed" width="30em" color="accent")
        h2.text-underline-primary.inline-block(slot="title") Utility
        div(slot="text") 
          p.text-center A website for everyday <a href="http://itsdatnguyen.github.io/utility">utilities.</a>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

import Banner from '~/components/Banner.vue'
import Parallax from '~/components/Parallax.vue'
import Card from '~/components/Card.vue'

@Component({
  components: {
    Banner,
    Parallax,
    Card
  }
})
export default class IndexPage extends Vue {
  headerImage = require('~/assets/img/stealth-game/starting-area-min.jpg')
  cssPlaygroundImage = require('~/assets/img/css-playground/css-playground-promo.png')
  stealthGameImage = require('~/assets/img/stealth-game/models-min.jpg')
  redsAdventureImage = require('~/assets/img/reds-adventure/red-attacking-min.jpg')
  utilityImage = require('~/assets/img/utility/utility-demo-min.jpg')

  textOptions = {
    speed: 50
  }
}
</script>