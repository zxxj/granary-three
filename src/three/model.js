import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { createTag } from './tag'

const model = new THREE.Group()
const loader = new GLTFLoader()
const granaryArr = [] // 所有粮仓对象的集合, 用于射线拾取

loader.load('/model.glb', (gltf) => {
  const group = gltf.scene.getObjectByName('粮仓')

  group.traverse((obj) => {
    if (obj.isMesh) {
      const label = createTag(obj.name)
      const position = new THREE.Vector3()
      obj.getWorldPosition(position)

      if (obj.parent.name === '立筒仓') {
        position.y += 36
      }

      if (obj.parent.name === '浅圆仓') {
        position.y += 20
      }

      if (obj.parent.name === '平房仓') {
        position.y += 17
      }

      label.position.copy(position)
      granaryArr.push(obj)
      model.add(label)
    }
  })

  model.add(gltf.scene)
})

export { model, granaryArr }
