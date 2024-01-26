import * as THREE from 'three'
import { camera } from './camera'
import { scene } from './scene'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { tagRenderer } from './tag'

const width = window.innerWidth
const height = window.innerHeight

const renderer = new THREE.WebGLRenderer({
  antialias: true // 开启抗锯齿
})
renderer.setSize(width, height)
renderer.setPixelRatio(window.devicePixelRatio) // 设置当前设备的像素比率,防止Canvas画布输出模糊
renderer.outputColorSpace = THREE.SRGBColorSpace // 解决贴图颜色偏差问题
renderer.setClearColor(0x005577)

const render = () => {
  window.requestAnimationFrame(render)
  renderer.render(scene, camera)
  tagRenderer.render(scene, camera)
}

render()

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  tagRenderer.setSize(window.innerWidth, window.innerHeight)
}

new OrbitControls(camera, renderer.domElement)

export { renderer }
