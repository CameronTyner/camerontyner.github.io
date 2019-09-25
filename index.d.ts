declare module '*.vue' {
  import Vue from 'vue'
  const _default: Vue
  export default _default
}

declare module '*.svg' {
  export const value
}

declare namespace NodeJS {
  export interface Process {
    client: boolean
    server: boolean
  }
}