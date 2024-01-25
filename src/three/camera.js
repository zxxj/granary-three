import * as THREE from 'three'

const width = window.innerWidth
const height = window.innerHeight

const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000)
camera.position.set(200, 200, 350)
camera.lookAt(0, 0, 0)

export { camera }
