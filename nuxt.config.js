/** @type {import('highcharts/highcharts').Options} */
const setOptions = {
        lang: { // <-- we correctly get intellisense
            // decimalPoint: '.' // this can be changed to anything, like ',' and it works
        }
    }
    /** @type {import('highcharts/highcharts').Options} */
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'tanviet',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            }
        ],
        script: [{
                src: "https://code.jquery.com/jquery-3.6.0.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/wow/0.1.12/wow.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
                type: "text/javascript"
            },
            {
                src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.jquery.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js",
                type: "text/javascript"
            },
            {
                src: "http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js",
                type: "text/javascript"
            }
        ]
    },


    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/style.css',
        "~/assets/css/slick.css",
        '~/node_modules/vue-slick-carousel/dist/vue-slick-carousel.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "~/plugins/script.client.js",
        // {
        //     src: "~/plugins/highcharts.js",
        //     ssr: true
        // },
        { src: '@/plugins/vue-slick-carousel', mode: 'client' }
    ],
    highcharts: {
        exporting: true
    },
    env: {
        baseUrl: process.env.BASE_URL || "http://tanviet.liforte.com/",
        VUE_APP_DOMAIN_API: process.env.BASE_URL || "http:/tanviet.liforte.com/",
        VUE_APP_BASE_API: "http:/tanviet.liforte.com/frontend",
        VUE_APP_DOMAIN: "http://192.168.1.224:3080"
    },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],
    server: {
        port: 3080,
        host: "192.168.1.224"
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // Simple usage
        'nuxt-highcharts',

        // With options
        ['nuxt-highcharts', { /* module options */ }]
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    globals: {
        loadingTimeout: 5000
    },
    generate: {
        dir: './public'
    }
}