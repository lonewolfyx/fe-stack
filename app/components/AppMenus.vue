<template>
    <a-menu
        v-model:selected-keys="selectedKey"
        :default-selected-keys="['0']"
        :theme="isDark?'dark':'light'"
        class="px-0"
        @menu-item-click="handleClick"
    >
        <a-menu-item
            v-for="item in Object.keys(payload)"
            :key="item"
        >
            {{ capitalize(item) }}
        </a-menu-item>
    </a-menu>
</template>

<script lang="ts" setup>
import { payload } from '~/composables/payload'
import { capitalize } from '~/utils'
import { isDark } from '~/composables/dark'

defineOptions({
    name: 'AppMenus',
})

const route = useRoute()

const selectedKey = ref<string[]>([])

watchEffect(() => {
    if (route.params?.category) {
        selectedKey.value = [route.params?.category] as string[]
    }
    else {
        selectedKey.value = ['all']
    }
})

const handleClick = (data: string) => {
    selectedKey.value = [data]
    navigateTo(`/category/${data}`)
    console.log(data)
}
</script>
