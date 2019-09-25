const parseArgs = require("minimist")
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000"
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost"
module.exports = {
  env: {
    baseUrl:
      process.env.BASE_URL ||
      `http://${host}:${port}`
  },
  head: {
    title: "Dat Nguyen's Repository",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Github repository of website developer and game developer Dat Nguyen."
      },
      {
        'http-equiv': 'Content-Type',
        content: 'text/html',
        charset: 'utf-8'
      },
      { // open graph
        hid: 'og:description',
        property: "og:description",
        content: "Github repository of website developer and game developer Dat Nguyen."
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Dat Nguyen's Repository"
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://itsdatnguyen.github.io/'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Dat Nguyen's Repository"
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: './meta-image.png'
      },
      { 
        hid: 'twitter:card', // twitter card
        name: 'twitter:card',
        content: 'Github repository of website developer and game developer Dat Nguyen.'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@itsdatnguyen'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: "Dat Nguyen's Repository"
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Github repository of website developer and game developer Dat Nguyen.'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@itsdatnguyen'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: './meta-image.png'
      },
      {
        name: 'msapplication-TileColor',
        content: '#da532c'
      }, 
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5"
      },
    ]
  },
  plugins: [
    { src: '~/plugins/typeit.js', ssr: false },
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: ["~/assets/sass/index.sass"],
  build: {
    extend (config, ctx) {
      const urlLoaderIndex = config.module.rules.findIndex(r => String(r.test) === String(/\.(png|jpe?g|gif|svg)$/))
      if (urlLoaderIndex !== -1) {
        config.module.rules[urlLoaderIndex].test = /\.(png|jpe?g|gif)$/
      }
      else {        
        console.error('vue-svg-loader is not the default loader for svgs')
      }

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
        options: {
          // optional [svgo](https://github.com/svg/svgo) options
          svgo: {
            plugins: [
              {removeDoctype: true},
              {removeComments: true},
              {cleanupIDs: false},
              {collapseGroups: false},
              {removeEmptyContainers: false},
              {removeViewBox: false}
            ]
          }
        }
      });
    },
  },
  modules: [
    "@nuxtjs/axios",
    "~/modules/typescript.js"
  ],
  axios: {}
}
