import * as THREE from 'three'
import { camera } from './camera'
import { granaryArr } from './model'

let chooseCurrentMesh = null

const chooseChange = (event) => {
  if (chooseCurrentMesh) {
    chooseCurrentMesh.material.color.set(0xffffff) // 把上次选中的mesh设置为原来的颜色
  }

  let Sx = event.clientX // 鼠标单击位置横坐标
  let Sy = event.clientY // 鼠标单击位置纵坐标

  // 屏幕坐标转为WebGL标准设备坐标
  let x = (Sx / window.innerWidth) * 2 - 1 // WebGL标准设备横坐标
  let y = -(Sy / window.innerHeight) * 2 + 1 // WebGL标准设备纵坐标

  // 创建一个射线投射器
  let raycaster = new THREE.Raycaster()

  // 通过鼠标单击位置标准设备坐标和相机参数计算出射线投射器的射线属性ray
  raycaster.setFromCamera(new THREE.Vector2(x, y), camera)

  // 返回.intersectObjects()参数中射线选中的网格模型对象
  // 未选中对象时返回空数组,选中时数组中会存在1个元素
  let intersects = raycaster.intersectObjects(granaryArr)

  if (intersects.length > 0) {
    chooseCurrentMesh = intersects[0].object // 直接引用选中的模型
    chooseCurrentMesh.material.color.set(0x00ff00) // 选中改变颜色
  }
}

window.addEventListener('click', chooseChange)

export { chooseChange }
