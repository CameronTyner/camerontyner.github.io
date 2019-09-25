<template lang="pug">
  .banner(:class="bannerClasses")
    down-arrow-trailer-primary-svg.banner__trailer-arrow(v-if="displayArrow && color == 'primary'")
    down-arrow-trailer-accent-svg.banner__trailer-arrow(v-if="displayArrow && color == 'accent'")
    .banner__text-content(:class="bannerTextContentClasses")
      .banner__banner-title
        slot(name="title")
      .banner__banner-text
        slot(name="text")
    down-arrow-point-primary-svg.banner__point-arrow(v-if="displayArrow && color == 'primary'")
    down-arrow-point-accent-svg.banner__point-arrow(v-if="displayArrow && color == 'accent'")
</template>


<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

import { ThemeColor } from "~/lib"

import DownArrowPointPrimarySvg from '~/assets/img/icon/bannerdownarrow-primary.svg'
import DownArrowTrailerPrimarySvg from '~/assets/img/icon/bannerdownarrowtrailer-primary.svg'
import DownArrowPointAccentSvg from '~/assets/img/icon/bannerdownarrow-accent.svg'
import DownArrowTrailerAccentSvg from '~/assets/img/icon/bannerdownarrowtrailer-accent.svg'

@Component({
  components: {
    DownArrowPointPrimarySvg,
    DownArrowTrailerPrimarySvg,
    DownArrowPointAccentSvg,
    DownArrowTrailerAccentSvg,
  } as any
})
export default class Banner extends Vue {

  @Prop({ type: String, default: 'primary' })
  color: ThemeColor

  @Prop({ type: Boolean, default: false })
  small: boolean

  @Prop({ type: Boolean, default: false })
  displayArrow: boolean

  @Prop({ type: Boolean, default: false })
  hasSpacing: boolean

  get bannerClasses() {
    return {
      [this.bannerColor]: true,
      'banner--small': this.small,
      'banner--spacing': this.hasSpacing
    }
  }

  get bannerTextContentClasses() {
    return {
      'banner--text-content-small': this.small
    }
  }

  get bannerColor(): string {
    switch (this.color) {
      case 'primary':
        return 'banner--primary'

      case 'accent':
        return 'banner--accent'

      default:
        return ''
    }
  }
}
</script>