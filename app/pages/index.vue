<template>
    <div class="relative px-4 py-3 space-y-8">
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

const data = computed(() => {
    return Object.fromEntries(
        Object.values(payload.value)
            .flatMap(section => Object.entries(section))
            .slice(0, 10),
    )
})
</script>

<style scoped>

</style>
