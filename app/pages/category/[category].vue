<template>
    <div class="relative px-4 py-3 pb-16 space-y-8">
        <DependencyCard
            v-for="items in Object.keys(data)"
            :key="items"
            :items="data[items]!"
            :title="items"
        />
    </div>
</template>

<script lang="ts" setup>
import { payload } from '~/composables/payload'
import type { IDependencyCategories } from '~/types'

const { params } = useRoute()

const data = computed<IDependencyCategories>(() => {
    return payload.value?.[params.category as string] ?? {}
})
</script>

<style scoped>

</style>
