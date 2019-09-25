<template lang="pug">
  div
    navbar.navbar--fixed
    nuxt
    app-footer
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import throttle from 'lodash/throttle'

import { EventBus, UPDATE_PARALLAX_EVENT, IS_MOBILE_EVENT, UPDATE_NAVBAR_EVENT } from "~/lib"

import Navbar from '~/components/Navbar.vue'
import AppFooter from '~/components/AppFooter.vue'

@Component({
  components: {
    Navbar,
    AppFooter
  }
})
export default class extends Vue {

  windowWidth = 0

  get isMobile(): boolean {
    return this.windowWidth < 768
  }

  get shouldEnableParallax() {
    // sorry IE/Edge, you just don't work well with parallax.
    // god will most likely condemn me to hell for using user agents.
    var ua = window.navigator.userAgent;
    var isInferiorBrowser = /MSIE|Trident|Edge/.test(ua);

    return !isInferiorBrowser
  }

  beforeMount() {
    window.addEventListener('scroll', this.resizeEvent)
    window.addEventListener('resize', this.resizeEvent)   
   
    this.windowWidth = document.body.clientWidth
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.resizeEvent)
    window.removeEventListener('resize', this.resizeEvent)
  }

  resizeEvent = throttle((event: Event) => {
    this.windowWidth = document.body.clientWidth

    if (!this.isMobile && this.shouldEnableParallax) {
      window.requestAnimationFrame(this.emitParallaxEvent)
    }
    else {
      this.isMobileEvent()
    }
    EventBus.$emit(UPDATE_NAVBAR_EVENT, event)
  }, 10)

  isMobileEvent = throttle(() => {
    EventBus.$emit(IS_MOBILE_EVENT)
  }, 200)

  emitParallaxEvent() {
    EventBus.$emit(UPDATE_PARALLAX_EVENT)
  }

}
</script>
