<template>
    <div class="flex flex-center justify-between mt-auto">
        <NuxtLink
            :to="config.public.github"
            target="_blank"
            title="Open Source"
        >
            <Icon
                class="text-slate-700/75 dark:text-slate-200/75"
                name="line-md:github-loop"
                size="16"
            />
        </NuxtLink>
        <div class="flex items-center gap-4">
            <button
                class="cursor-pointer"
                type="button"
                @click="handleClick"
            >
                <Icon
                    class="text-slate-700/75 dark:text-slate-200/75"
                    name="lucide:git-pull-request"
                    size="16"
                />
            </button>

            <button
                class="cursor-pointer hidden"
                type="button"
                @click="toggleDark"
            >
                <Icon
                    class="text-slate-700/75 dark:text-slate-200/75"
                    name="lucide:sun"
                    size="16"
                />
            </button>
        </div>
    </div>
    <a-drawer
        :closable="false"
        :header="false"
        :visible="showSubmitModal"
        body-class="dark:bg-muted/75"
        unmount-on-close
        width="50%"
        @cancel="handleCancel"
        @ok="handleOk"
    >
        <div class="flex items-start mb-4">
            <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 sm:mx-0 sm:h-10 sm:w-10"
            >
                <Icon
                    class="text-primary"
                    name="lucide:plus"
                    size="24"
                />
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-slate-700 dark:text-slate-200">
                    Submit Your Front-End Stack Tools
                </h3>
                <div class="mt-2">
                    <p class="text-sm text-slate-600/50 dark:text-slate-400">
                        Want to add your front-end technology stack to our collection? We are very glad to join it!
                        Follow these steps to
                        submit your front-end technology stack:
                    </p>
                </div>
            </div>
        </div>

        <div class="space-y-4">
            <div class="flex items-start space-x-3">
                <div class="flex-shrink-0">
                    <div
                        class="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm font-bold"
                    >
                        1
                    </div>
                </div>
                <div>
                    <p class="text-sm font-medium text-slate-700 dark:text-slate-100">
                        Fork the Repository
                    </p>
                    <p class="text-sm text-slate-600/50 dark:text-slate-400">
                        Fork the <code
                            class="bg-gray-100  px-1 rounded"
                        >fe-stack</code> repository on GitHub
                    </p>
                </div>
            </div>

            <div class="flex items-start space-x-3">
                <div class="flex-shrink-0">
                    <div
                        class="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white dark:text-muted text-sm font-bold"
                    >
                        2
                    </div>
                </div>
                <div>
                    <p class="text-sm font-medium text-slate-700 dark:text-slate-100 ">
                        Add Your front end tools
                    </p>
                    <p class="text-sm text-slate-600/50 dark:text-slate-400 mb-2">
                        Add your front end tools information to <code
                            class="bg-gray-100 dark:bg-slate-700 px-1 rounded"
                        >public/dependency.json</code>
                    </p>
                    <details class="text-xs">
                        <summary
                            class="cursor-pointer text-primary hover:text-[#1374e5] dark:hover:text-primary font-medium"
                        >
                            Show example structure
                        </summary>
                        <pre
                            class="mt-2 p-2 bg-gray-50 dark:bg-slate-700 dark:text-slate-200 rounded text-xs overflow-x-auto"
                        ><code>{
    "id": "Tools Name",
    "name": "Tools Name",
    "description": "Your Tool Description",
    "category": {
        "main": "Main Category Name",
        "children": "Child Category Name"
    },
    "packageName": "npm-package-name",
    "github": "https://github.com/username/repo",
    "npm": "https://www.npmjs.com/package/package-name",
    "website": "https://your-website-url.com",
    "author": {
        "name": "Your Name",
        "url": "Your Url"
    },
    "stars": 0, // Github Stars Number
    "downloads": 0 // NPM Downloads Number
}</code></pre>
                    </details>
                </div>
            </div>

            <div class="flex items-start space-x-3">
                <div class="flex-shrink-0">
                    <div
                        class="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm font-bold"
                    >
                        3
                    </div>
                </div>
                <div>
                    <p class="text-sm font-medium text-slate-700 dark:text-slate-100">
                        Create Pull Request
                    </p>
                    <p class="text-sm text-slate-600/50 dark:text-slate-400">
                        Submit a PR with your front end tools details and we'll
                        review it
                    </p>
                </div>
            </div>
        </div>

        <template #footer>
            <a-button @click="handleCancel">
                Close
            </a-button>
            <a-button
                class="flex items-center"
                type="primary"
                @click="handleOk"
            >
                <Icon
                    class="mr-2"
                    name="line-md:github-loop"
                    size="16"
                />
                Open GitHub Repository
            </a-button>
        </template>
    </a-drawer>
</template>

<script lang="ts" setup>
import { toggleDark } from '~/composables/dark'

defineOptions({
    name: 'AppFooter',
})

const config = useRuntimeConfig()

const showSubmitModal = ref<boolean>(false)

const handleClick = () => {
    showSubmitModal.value = true
}
const handleOk = () => {
    navigateTo(config.public.github, {
        open: {
            target: '_blank',
        },
    })
}
const handleCancel = () => {
    showSubmitModal.value = false
}
</script>

<style scoped>

</style>
