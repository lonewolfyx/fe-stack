<template>
    <div class="relative flex flex-col">
        <div class="flex">
            <div
                class="border border-slate-200 rounded-full px-3 py-1"
            >
                <div class="flex items-center gap-2">
                    <span class="text-base font-medium text-slate-700 text-mono">{{ capitalize(title) }}</span>
                    <span class="text-xs text-slate-700/35">({{ items.length }})</span>
                </div>
            </div>
        </div>

        <div>
            <svg
                class="ml-5 w-[27px] h-[30px] text-slate-200"
                fill="none"
                viewBox="0 0 27 30"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        d="M0.5 0C0.5 18 26.5 12 26.5 30"
                        stroke="currentColor"
                        stroke-width="1px"
                    />
                </g>
            </svg>
            <div class="ml-5">
                <!-- border rounded-xl px-4 py-3 border-slate-200 -->
                <div class="grid grid-cols-4 gap-4 font-sans">
                    <DependencyItems :items="items" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IDependency } from '~/types'
import { capitalize } from '~/utils'

defineOptions({
    name: 'DependencyCard',
})

const props = withDefaults(defineProps<{
    items: IDependency[]
    title: string
}>(), {})
</script>

<style scoped>

</style>
