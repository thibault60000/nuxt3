<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.public.apiBase)

const appConfig = useAppConfig()

console.log(appConfig.theme)
</script>

<template>
    <div>
        <NuxtWelcome />
    </div>
</template>