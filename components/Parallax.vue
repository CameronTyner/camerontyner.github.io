<template lang="pug">
  .parallax
    .parallax__content
      .parallax__image(ref="img" :style="imgStyles")
    .parallax__fixed-content(:class="justifyDirection")
      slot(name="fixed")
    button.parallax--downward-icon(v-if="showDownwardIcon" :class="ready ? 'parallax--downward-icon-ready' : ''" @click="onDownwardIconClicked")
      downward-arrow
</template>


<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

import { EventBus, UPDATE_PARALLAX_EVENT, IS_MOBILE_EVENT } from "~/lib"

import DownwardArrow from '~/assets/img/icon/arrow_downward-24px.svg'

@Component({
  components: {
    DownwardArrow
  } as any
})
export default class Parallax extends Vue {

  @Prop({ type: String, default: 'center' })
  justifyContent: string

  @Prop({ type: String })
  src: string

  @Prop({ type: Number, default: 1 })
  modifier: number

  @Prop({ type: Boolean, default: false })
  showDownwardIcon: boolean

  parallax = 0
  ready = false

  get imgStyles() {
    return {
      'background-position': `50% ${this.parallax}px`,
      'background-image': `url(${this.src})`
    }
  }

  get justifyDirection(): string {
    switch (this.justifyContent) {
      case 'center':
        return 'justify-center'

      case 'start':
        return 'justify-start'

      case 'end':
        return 'justify-end'

      default:
        return ''
    }
  }

  beforeMount() {
    EventBus.$on(UPDATE_PARALLAX_EVENT, this.resize)
    EventBus.$on(IS_MOBILE_EVENT, this.resetParallax)
  }

  mounted() {
    this.ready = true
    this.resize()
  }

  beforeDestroy() {
    EventBus.$off(UPDATE_PARALLAX_EVENT, this.resize)
    EventBus.$off(IS_MOBILE_EVENT, this.resetParallax)
  }

  resetParallax() {
    this.parallax = 0
  }

  resize() {
    const offset = this.$el.getBoundingClientRect()
    const scrollOffset = offset.top

    this.parallax = Math.round(scrollOffset / -this.modifier)
  }

  onDownwardIconClicked() {
    const topOffset = (window.innerHeight / 2) + 120

    if (typeof window.scroll === 'function') {
      window.scroll({
        top: topOffset,
        behavior: 'smooth'
      })
    }
    else {
      document.documentElement.scrollTop = topOffset
    }
  }
}
</script>