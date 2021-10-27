<template>
  <div v-html="html" />
</template>

<script lang="ts" setup>
import { welcome as welcomeTemplate } from '@nuxt/design'
const html = welcomeTemplate({})
</script>
