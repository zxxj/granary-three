<script setup>
// import * as THREE from 'three'
import { onMounted } from 'vue'
import { renderer } from '@/three/renderer'

onMounted(() => {
  document.getElementById('container').appendChild(renderer.domElement)
})

// const width = window.innerWidth
// const height = window.innerHeight

// const geometry = new THREE.BoxGeometry(100, 100, 100)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// const scene = new THREE.Scene()
// scene.add(mesh)

// const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000)
// camera.position.set(200, 200, 200)
// camera.lookAt(0, 0, 0)

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(width, height)

// const render = () => {
//   window.requestAnimationFrame(render)
//   renderer.render(scene, camera)
// }

// render()
</script>

<template>
  <div id="container"></div>
</template>

<style scoped></style>
