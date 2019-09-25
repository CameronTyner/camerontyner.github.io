<template lang="pug">
  nav.navbar
    nuxt-link.navbar__brand-logo(to="/" :class="outlineClasses" title="Home") Dat Nguyen
    .navbar__link-spacer(:class="spacerClasses")
    .navbar__links(:class="outlineClasses")
      nuxt-link.navbar--icon.navbar--icon-center(to="/about" title="About")
        about-icon
      nuxt-link.navbar--icon.navbar--icon-center(to="/contact" title="Contact")
        contact-icon
      a.navbar--icon.navbar--icon-center(download href="./resume.pdf" title="Download Resume")
        resume-icon

    
</template>


<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

import { EventBus, UPDATE_NAVBAR_EVENT } from "~/lib"

import AboutIcon from '~/assets/img/icon/person-24px.svg'
import ContactIcon from '~/assets/img/icon/message-24px.svg'
import ResumeIcon from '~/assets/img/icon/cloud_download-24px.svg'

@Component({
  components: {
    AboutIcon,
    ContactIcon,
    ResumeIcon
  } as any
})
export default class Navbar extends Vue {

  scrollDistance = 0
  screenWidth = 10000

  get isNavBorderOutlineVisible(): boolean {
    if ((process as any).client) {
      return this.scrollDistance > (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) * 0.6
    }
    return false
  }

  get outlineClasses() {
    return {
      'navbar--outline': this.isNavBorderOutlineVisible
    }
  }

  get spacerClasses() {
    return {
      'navbar--outline': (this.screenWidth < 500) && this.isNavBorderOutlineVisible
    }
  }

  beforeMount() {
    EventBus.$on(UPDATE_NAVBAR_EVENT, this.resize)
  }

  mounted() {
    this.resize()
  }

  beforeDestroy() {
    EventBus.$off(UPDATE_NAVBAR_EVENT, this.resize)
  }

  resize() {
    if (document.scrollingElement) {
      this.scrollDistance = document.scrollingElement.scrollTop
    }
    this.screenWidth = document.body.clientWidth
  }
}
</script>