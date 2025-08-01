<template>
    <template v-if="isLoading">
        loading
    </template>
    <template v-else>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </template>
</template>

<script lang="ts" setup>
import { init, isLoading } from '~/composables/payload'

init()
</script>
