<template lang="pug">
  section
    parallax(justify-content="center" :src="headerImage" :modifier="1.2" :show-downward-icon="true")
      card.elevation-large(slot="fixed" color="primary" :ghost="true")
        h1(slot="title")
          no-ssr
            animated-typed-text(:text="['Contact']" :options="textOptions")
    banner(color="accent" :small="true" :displayArrow="true" :hasSpacing="true")
    blurred-background.banner-background-offset(:url="headerImage")
      .text-container
        card.elevation-medium
          banner(slot="title" color="accent" :small="true")
            h2(slot="title") Contact Me
          article(slot="text")      
            h4.text-emphasize-primary Email
            p Need a custom website done? Have any questions about my work? Send me an email at <a href="mailto:demesnewebsite@gmail.com">demesnewebsite@gmail.com</a>
            h4.text-emphasize-primary Github
            p Check out my projects at my Github: <a href="https://github.com/itsdatnguyen">itsdatnguyen</a>
            h4.text-emphasize-primary LinkedIn
            p Also my <a href="https://www.linkedin.com/in/datquangnguyen/">LinkedIn</a>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

import Parallax from '~/components/Parallax.vue'
import Card from '~/components/Card.vue'
import Banner from '~/components/Banner.vue'
import BlurredBackground from "~/components/BlurredBackground.vue";

@Component({
  components: {
    Parallax,
    Card,
    Banner,
    BlurredBackground
  }
})
export default class ContactPage extends Vue {
  headerImage = require('~/assets/img/stealth-game/central-area-min.jpg')

  textOptions = {
    speed: 50
  }

  head() {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Contact"
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "Contact"
        },
        {
          hid: "description",
          name: "description",
          content: "Contact website developer and game developer Dat Nguyen."
        },
        { // open graph
          hid: 'og:description',
          property: "og:description",
          content: "Contact website developer and game developer Dat Nguyen."
        },
        { 
          hid: 'twitter:card', // twitter card
          name: 'twitter:card',
          content: 'Contact website developer and game developer Dat Nguyen.'
        },        
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Contact website developer and game developer Dat Nguyen.'
        },
      ]
    }
  }
}
</script>