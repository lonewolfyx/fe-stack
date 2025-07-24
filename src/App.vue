<template>
    <div class="relative w-screen h-screen">
        <div id="map" />
        <div class="absolute bottom-2 left-2 text-xs text-zinc-500/30">
            <span>FE Stack · Created by <a
                href="https://github.com/lonewolfyx"
                target="_blank"
                title="OldDriver(lonewolfyx)"
            >lonewolfyx</a> · Open Source on <a
                href="https://github.com/lonewolfyx/fe-stack"
                target="_blank"
                title="Front End Stack"
            >Github</a></span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import MindElixir from 'mind-elixir'
import { onMounted, ref } from 'vue'
import { mindOptions } from '@/lib/mind.options.ts'
import 'mind-elixir/style'

const mind = ref()
onMounted(() => {
    mind.value = new MindElixir({
        el: '#map',
        direction: 2,
        editable: false,
        newTopicName: 'Front End Stack',
    })
    mind.value.init(mindOptions)
})
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
