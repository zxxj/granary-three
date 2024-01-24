import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const model = new THREE.Group()

const loader = new GLTFLoader()
loader.load('/model.gltf', (gltf) => {
  model.add(gltf.scene)
})

export { model }
