<template lang="pug">
  .card(:class="cardClasses" :style="cardStyles")
    div.card__title
      slot(name="title")
    div.card__text 
      slot(name="text")
</template>


<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

import { ThemeColor } from "~/lib"

@Component({})
export default class Card extends Vue {

  @Prop({ type: String, default: 'auto' })
  width: string

  @Prop({ type: String, default: '' })
  color: ThemeColor

  @Prop({ type: Boolean, default: false })
  ghost: boolean

  get cardColor(): string {
    switch (this.color) {
      case 'primary':
        return 'card--primary'

      case 'accent':
        return 'card--accent'

      default:
        return ''
    }
  }

  get cardStyles() {
    return {
      width: this.width
    }
  }

  get cardClasses() {
    return {
      'card--ghost': this.ghost,
      [this.cardColor]: true
    }
  }
}
</script>