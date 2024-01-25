import * as THREE from 'three'
import { model } from './model'

const scene = new THREE.Scene()

// 环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 1)

// 平行光1
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1)
directionalLight1.position.set(400, 200, 300)

// 平行光2
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1)
directionalLight1.position.set(-400, -200, -300)

scene.add(directionalLight1)
scene.add(directionalLight2)
scene.add(ambientLight)
scene.add(model)
scene.fog = new THREE.Fog(0x005577, -100, 1500) // 设置雾化效果,雾的颜色和背景颜色相近,这样在远处看的话网格线会和背景颜色融为一体

export { scene }
