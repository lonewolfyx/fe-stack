<template>
    <NuxtLink
        v-for="item in items"
        :key="item.id"
        :to="item?.github ?? item.website"
        class="bg-muted/20 relative flex flex-col items-start border rounded-xl px-4 py-3 border-slate-200 font-sans"
        target="_blank"
    >
        <span class="text-sm font-medium text-slate-700 mb-2">{{ item.name }}</span>
        <p class="text-slate-700/50  text-xs line-clamp-1 mb-4">
            {{ item.description }}
        </p>
        <div class="flex w-full justify-between items-center">
            <NuxtLink
                v-if="item.author"
                :to="item?.author?.url"
                class="flex items-center gap-0.5 text-slate-500/75"
                target="_blank"
            >
                <a-tooltip
                    :content="item?.author?.name"
                    position="top"
                >
                    <Icon
                        name="lucide:users"
                        size="16"
                    />
                    <span class="text-xs font-mono">{{ item?.author?.name }}</span>
                </a-tooltip>
            </NuxtLink>
            <div class="flex justify-start items-center gap-3">
                <div
                    v-if="item?.stars"
                    class="flex items-center text-slate-500/75 gap-1"
                >
                    <Icon
                        class="text-yellow-500"
                        name="lucide:star"
                        size="14"
                    />
                    <span class="text-xs ">{{ formatNumber(item.stars) }}</span>
                </div>
                <div
                    v-if="item?.downloads"
                    class="flex items-center text-slate-500/75 gap-1"
                >
                    <Icon
                        class="text-blue-500"
                        name="lucide:download"
                        size="14"
                    />
                    <span class="text-xs">{{ formatNumber(item.downloads) }}</span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { IDependency } from '~/types'

defineOptions({
    name: 'DependencyItems',
})

const props = defineProps<{
    items: IDependency[]
}>()

const formatNumber = (count: number): string => {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M'
    }
    if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K'
    }
    return count.toString()
}
</script>

<style scoped>

</style>
