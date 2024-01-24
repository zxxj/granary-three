import * as THREE from 'three'
import { camera } from './camera'
import { scene } from './scene'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const width = window.innerWidth
const height = window.innerHeight

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)

const render = () => {
  window.requestAnimationFrame(render)
  renderer.render(scene, camera)
}

render()

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}

new OrbitControls(camera, renderer.domElement)

export { renderer }
