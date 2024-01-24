import * as THREE from 'three'
import { mesh } from './model'

const scene = new THREE.Scene()

scene.add(mesh)

export { scene }
