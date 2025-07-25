import type { MindElixirData } from 'mind-elixir'
import { cNode } from '@/lib/utils.ts'

// 脚手架
const cliNode = {
    id: '1',
    topic: '脚手架',
    children: [
        {
            id: '1.1',
            topic: '命令解析',
            children: [
                cNode('1.1.1', 'commander', 'https://github.com/tj/commander.js'),
                cNode('1.1.2', 'cac', 'https://github.com/cacjs/cac', { icons: ['✨✨✨'] }),
                cNode('1.1.3', 'Yargs', 'https://github.com/yargs/yargs'),
            ],
        },
        {
            id: '1.2',
            topic: '美化输出和交互',
            children: [
                {
                    id: '1.2.1',
                    topic: '交互',
                    children: [
                        cNode('1.2.1.1', 'prompts', 'https://github.com/terkelg/prompts'),
                        cNode('1.2.1.2', '@clack/prompts', 'https://github.com/bombshell-dev/clack'),
                        cNode('1.2.1.3', 'Inquirer.js', 'https://github.com/SBoudrias/Inquirer.js'),
                        cNode('1.2.1.4', 'Enquirer', 'https://github.com/enquirer/enquirer'),
                    ],
                },
                {
                    id: '1.2.2',
                    topic: '美化输出',
                    children: [
                        cNode('1.2.2.1', 'figlet', 'https://github.com/patorjk/figlet.js'),
                        cNode('1.2.2.2', 'picocolors', 'https://github.com/alexeyraspopov/picocolors'),
                        cNode('1.2.2.3', 'ansis', 'https://github.com/webdiscus/ansis'),
                    ],
                },
            ],
        },
    ],
}

const uiNode = {
    id: '2',
    topic: 'UI',
    children: [],
}

const cssNode = {
    id: '3',
    topic: 'CSS',
    children: [
        {
            id: '3.1',
            topic: 'Tailwind CSS',
            hyperLink: 'https://tailwindcss.com/',
            children: [
                cNode('3.1.1', 'Aceternity UI', 'https://ui.aceternity.com/'),
                cNode('3.1.2', 'Volt', 'https://volt.primevue.org/'),
                cNode('3.1.3', 'Magic UI', 'https://magicui.design/'),
                cNode('3.1.4', 'Tailwind Plus', 'https://tailwindcss.com/plus'),
                cNode('3.1.5', 'Preline UI', 'https://preline.co/'),
                cNode('3.1.6', 'Shadcn-vue', 'https://www.shadcn-vue.com/'),
                cNode('3.1.7', 'Flowbite', 'https://flowbite.com/'),
                cNode('3.1.8', 'Daisy UI', 'https://daisyui.com/'),
                cNode('3.1.9', 'Float UI', 'https://floatui.com/'),
                cNode('3.1.11', 'Flyon UI', 'https://flyonui.com/'),
                cNode('3.1.11', 'Merak UI', 'https://merakiui.com/'),
                cNode('3.1.12', 'Tail Grids', 'https://tailgrids.com/'),
            ],
        },
        cNode('3.2', 'Sass / SCSS', 'https://sass-lang.com/'),
        cNode('3.3', 'PostCSS', 'https://postcss.org/'),
        cNode('3.4', 'CSS Modules', 'https://github.com/css-modules'),
        cNode('3.5', 'UnoCSS', 'https://unocss.dev/'),
        cNode('3.6', 'Less', 'https://lesscss.org/'),
    ],
}

// https://tonai.github.io/blog/posts/bundlers-comparison/
const buildNode = {
    id: '4',
    topic: '构建打包',
    children: [
        cNode('4.1', 'vite', 'https://vitejs.dev/'),
        cNode('4.2', 'esbuild', 'https://esbuild.github.io/'),
        cNode('4.3', 'unbuild', 'https://github.com/unjs/unbuild'),
        cNode('4.4', 'rollup', 'https://rollupjs.org/'),
        cNode('4.5', 'rolldown', 'https://github.com/rolldown/rolldown/'),
        cNode('4.6', 'tsup', 'https://github.com/egoist/tsup'),
        cNode('4.7', 'tsdown', 'https://github.com/rolldown/tsdown'),
        cNode('4.8', 'parcel', 'https://parceljs.org/'),
        cNode('4.9', 'turborepo', 'https://turborepo.com/'),
        {
            id: '4.10',
            topic: 'web-infra-dev',
            children: [
                cNode('4.10.1', 'Rspack', 'https://github.com/web-infra-dev/rspack'),
                cNode('4.10.2', 'Rsbuild', 'https://github.com/web-infra-dev/rsbuild'),
                cNode('4.10.3', 'Rslib', 'https://github.com/web-infra-dev/rslib'),
            ],
        },
    ],
}

const iconNode = {
    id: '5',
    topic: '图标',
    children: [
        cNode('5.1', 'iconify', 'https://icon-sets.iconify.design/'),
        cNode('5.2', 'Icons', 'https://igoutu.cn/icons/'),
        cNode('5.3', 'CSS Symbols', 'https://css.gg/'),
        cNode('5.4', 'Lucide Icon', 'https://lucide.dev/icons/'),
        cNode('5.5', 'Simple Icon', 'https://simpleicons.org/'),
        cNode('5.6', 'Feather Icon', 'https://feathericons.com/'),
        cNode('5.7', 'Font Awesome', 'https://fontawesome.com/'),
        cNode('5.8', 'Yesicon', 'https://yesicon.app/'),
        cNode('5.9', 'Svgl', 'https://svgl.app/'),
        cNode('5.10', 'Icon Font', 'https://www.iconfont.cn/'),
    ],
}

const frameworkNode = {
    id: '6',
    topic: 'Framework',
    children: [
        cNode('6.1', 'Vue', 'https://vuejs.org/', {
            children: [
                cNode('6.1.1', 'Vue Router', 'https://router.vuejs.org/'),
                cNode('6.1.2', 'Pinia', 'https://pinia.vuejs.org/', {
                    children: [
                        cNode('6.1.2.1', 'Pinia Plugin Persistedstate', 'https://github.com/prazdevs/pinia-plugin-persistedstate/'),
                    ],
                }),
                cNode('6.1.3', 'VueUse', 'https://github.com/vueuse/vueuse'),
                cNode('6.1.4', 'Vue I18n', 'https://github.com/intlify/vue-i18n'),
                cNode('6.1.5', 'Vue DevTools', 'https://github.com/vuejs/devtools'),

                cNode('6.1.6', 'UI Component Library', '', {
                    children: [
                        cNode('6.1.6.1', 'Element Plus', 'https://element-plus.org/'),
                        cNode('6.1.6.2', 'PrimeVue', 'https://primevue.org/'),
                        cNode('6.1.6.3', 'Reka UI', 'https://reka-ui.com/'),
                        cNode('6.1.6.4', 'Headless UI', 'https://headlessui.com/'),
                        cNode('6.1.6.5', 'Naive UI', 'https://www.naiveui.com/'),
                        cNode('6.1.6.6', 'Flowbite Vue', 'https://flowbite-vue.com/'),
                        cNode('6.1.6.7', 'Ant Design Vue', 'https://antdv.com/'),
                        cNode('6.1.6.8', 'Vuestic UI', 'https://ui.vuestic.dev/'),
                        cNode('6.1.6.9', 'Ark UI', 'https://ark-ui.com/'),
                        cNode('6.1.6.10', 'Arco Design Vue', 'https://arco.design/vue/'),
                        cNode('6.1.6.11', 'Inspira Ui', 'https://github.com/unovue/inspira-ui'),
                    ],
                }),
                cNode('6.1.7', 'Vite Plugins', '', {
                    children: [
                        cNode('6.1.7.1', 'vite-plugin-pages', 'https://github.com/hannoeru/vite-plugin-pages'),
                        cNode('6.1.7.2', 'rollup-plugin-visualizer', 'https://github.com/btd/rollup-plugin-visualizer'),
                        cNode('6.1.7.3', 'vite-plugin-restart', 'https://github.com/antfu/vite-plugin-restart'),
                        cNode('6.1.7.4', 'unplugin-vue-components', 'https://github.com/unplugin/unplugin-vue-components'),
                        cNode('6.1.7.5', 'vite-plugin-style-import', 'https://github.com/vbenjs/vite-plugin-style-import'),
                        cNode('6.1.7.6', 'unplugin-auto-import', 'https://github.com/unplugin/unplugin-auto-import'),
                        cNode('6.1.7.7', 'vite-plugin-svg-icons', 'https://github.com/vbenjs/vite-plugin-svg-icons'),
                        cNode('6.1.7.8', 'vite-plugin-html', 'https://github.com/vbenjs/vite-plugin-html'),
                        cNode('6.1.7.9', 'vite-plugin-compression', 'https://github.com/vbenjs/vite-plugin-compression'),
                        cNode('6.1.7.10', 'vite-plugin-imagemin', 'https://github.com/vbenjs/vite-plugin-imagemin'),
                        cNode('6.1.7.11', 'vite-plugin-purge-icons', 'https://www.npmjs.com/package/vite-plugin-purge-icons'),
                        cNode('6.1.7.12', '@vitejs/plugin-vue-jsx', 'https://github.com/vitejs/vite-plugin-vue'),
                        cNode('6.1.7.13', 'vite-plugin-vue-setup-extend', 'https://github.com/vbenjs/vite-plugin-vue-setup-extend'),
                        cNode('6.1.7.14', 'vitejs-plugin-legacy', 'https://www.npmjs.com/package/@vitejs/plugin-legacy'),
                        cNode('6.1.7.15', 'vite-plugin-vue-images', 'https://github.com/sampullman/vite-plugin-vue-images'),
                        cNode('6.1.7.16', '@vitejs/plugin-legacy', 'https://github.com/vitejs/vite/tree/main/packages/plugin-legacy'),
                    ],
                }),
                cNode('6.1.8', 'Motions', '', {
                    children: [
                        cNode('6.1.8.1', 'Motion Vue', 'https://motion.dev/docs/vue/'),
                    ],
                }),
                cNode('6.1.9', 'Nuxt', 'https://nuxt.com/'),
            ],
        }),
    ],
}

const animationNode = {
    id: '7',
    topic: 'Animation',
    children: [
        cNode('7.1', 'Scroll Reveal', 'https://scrollrevealjs.org/'),
        cNode('7.2', 'Scroll Magic', 'https://scrollmagic.io/'),
        cNode('7.3', 'Rellax', 'https://github.com/dixonandmoe/rellax'),
        cNode('7.4', 'Animate.css', 'https://animate.style/'),
        cNode('7.5', 'Animate On Scroll', 'https://michalsnik.github.io/aos/'),
        cNode('7.6', 'Wow.js', 'https://wowjs.uk/'),
        cNode('7.7', 'Three.js', 'https://threejs.org/'),
        cNode('7.8', 'GSAP', 'https://greensock.com/docs/v3/GSAP'),
        cNode('7.9', 'lottie-web', 'https://github.com/airbnb/lottie-web'),
    ],
}

export const mindOptions: MindElixirData = {
    nodeData: {
        id: 'root',
        topic: 'Front End Stack',
        children: [
            cliNode,
            // uiNode,
            cssNode,
            buildNode,
            iconNode,
            frameworkNode,
            animationNode,
        ],
    },
    theme: {
        name: 'Latte',
        // Updated color palette with more vibrant colors
        palette: ['#dd7878', '#ea76cb', '#8839ef', '#e64553', '#fe640b', '#df8e1d', '#40a02b', '#209fb5', '#1e66f5', '#7287fd'],
        // Enhanced CSS variables for better styling control
        cssVar: {
            '--node-gap-x': '30px',
            '--node-gap-y': '10px',
            '--main-gap-x': '32px',
            '--main-gap-y': '12px',
            '--root-radius': '30px',
            '--main-radius': '20px',
            '--root-color': '#ffffff',
            '--root-bgcolor': '#4c4f69',
            '--root-border-color': 'rgba(0, 0, 0, 0)',
            '--main-color': '#444446',
            '--main-bgcolor': '#ffffff',
            '--topic-padding': '3px',
            '--color': '#777777',
            '--bgcolor': '#f6f6f6',
            '--selected': '#4dc4ff',
            '--panel-color': '#444446',
            '--panel-bgcolor': '#ffffff',
            '--panel-border-color': '#eaeaea',
            '--map-padding': '50px 80px',
        },
    },
}
