<template lang="pug">
  .blurred-background
    .blurred-background__image(:style="styles")
    slot
</template>


<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component({})
export default class BlurredBackground extends Vue {

  @Prop({ type: String })
  url: string

  get styles() {
    return {
      'background-image': `url(${this.url})`
    }
  }
}
</script>

<style lang="sass" scoped>
.blurred-background
  position: relative
  overflow: hidden

  .blurred-background__image
    z-index: -1
    position: absolute
    top: -6%
    left: -6%
    width: 112%
    height: 112%
    background-repeat: none
    background-size: cover
    background-position: center
    filter: blur(12px)

</style>
