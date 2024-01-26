import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { createTag } from './tag'

const model = new THREE.Group()

const loader = new GLTFLoader()
loader.load('/model.gltf', (gltf) => {
  const group = gltf.scene.getObjectByName('粮仓')

  group.traverse((obj) => {
    if (obj.isMesh) {
      // console.log(obj.name)
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
      model.add(label)
      console.log(model)
    }
  })

  model.add(gltf.scene)
})

export { model }
