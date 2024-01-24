import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const mesh = new THREE.Mesh(geometry, material)

export { mesh }
