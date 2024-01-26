<script setup>
// import * as THREE from 'three'
import { onMounted } from 'vue'
import { renderer } from '@/three/renderer'
import { chooseChange } from '@/three/choose'

onMounted(() => {
  document.getElementById('container').appendChild(renderer.domElement)
})
</script>

<template>
  <div id="container"></div>
</template>

<style scoped></style>
