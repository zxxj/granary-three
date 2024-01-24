import * as THREE from 'three'
import { model } from './model'

const scene = new THREE.Scene()

const ambientLight = new THREE.AmbientLight(0xffffff, 1)

scene.add(ambientLight)
scene.add(model)

export { scene }
