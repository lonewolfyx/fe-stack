<template>
    <div class="flex grow w-full h-full overflow-hidden">
        <div class="fixed flex flex-col bg-muted z-20 w-72 h-full p-4">
            <div class="flex justify-start items-center gap-3">
                <img
                    alt="asd"
                    class="size-8"
                    src="/logo.svg"
                >
                <NuxtLink
                    class="font-mono font-medium"
                    to="/"
                >
                    <span class="text-slate-700 dark:text-slate-300 text-base font-medium">Front End Stack</span>
                </NuxtLink>
            </div>
            <div class="flex-1 overflow-auto my-5 hide-scrollbar">
                <AppMenus />
            </div>

            <AppFooter />
        </div>
        <div class="flex flex-row grow">
            <div
                class="flex flex-col grow items-stretch rounded-xl bg-background border border-input ms-72 m-4"
            >
                <div class="flex flex-col grow overflow-y-auto hide-scrollbar">
                    <main class="grow">
                        <slot />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>
