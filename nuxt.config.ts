import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/icon',
        'shadcn-nuxt',
        '@vueuse/nuxt',
    ],

    ssr: false,
    devtools: { enabled: true },

    app: {
        head: {
            title: 'Front End Stack',
            meta: [
                {
                    name: 'description',
                    content: 'Front End Stack',
                },
                {
                    name: 'keywords',
                    content: [
                        'fe',
                        'fe-stack',
                        'front end stack',
                    ].join('，'),
                },
            ],
            link: [
                {
                    rel: 'shortcut icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico',
                },
            ],
        },
    },

    css: ['~/assets/css/main.css'],

    runtimeConfig: {
        public: {
            github: 'https://github.com/lonewolfyx/fe-stack',
        },
    },

    devServer: {
        port: 3001,
    },

    compatibilityDate: '2025-07-15',

    vite: {
        base: './',
        plugins: [
            tailwindcss(),
        ],
    },

    eslint: {
        config: {
            stylistic: {
                indent: 4, // 4, or 'tab'
                quotes: 'single', // or 'double'
            },
        },
    },

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui',
    },

})
