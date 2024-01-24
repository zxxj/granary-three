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

export { scene }
