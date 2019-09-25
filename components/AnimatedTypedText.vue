<template lang="pug">
  span 
</template>


<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import TypeIt from 'typeit'

import { ThemeColor } from "~/lib"

@Component({})
export default class AnimatedTypedText extends Vue {

  @Prop({ type: Array })
  text: string[]

  @Prop({ type: Object })
  options: any

  mounted() {
    const typeIt = new TypeIt(this.$el, this.options)
    
    for (let text of this.text) {
      typeIt.type(text)
    }

    typeIt.go()
  }
}
</script>