// import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { CSS3DRenderer, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer'

const createTag = (nodeName) => {
  const div = document.createElement('div')
  div.innerHTML = nodeName
  div.classList.add('tag')

  const tag = new CSS3DSprite(div)
  div.style.pointerEvents = 'none'
  div.style.padding = '5px 10px'
  div.style.border = '1px solid skyblue'
  div.style.fontSize = '12px'
  div.style.color = '#FFF'
  div.style.borderRadius = '5%'

  tag.scale.set(0.2, 0.2, 0.2) // 根据相机渲染范围控制HTML3D标签的尺寸
  tag.rotateY(Math.PI / 2) // 控制HTML标签CSS3对象的姿态角度
  return tag
}

const tagRenderer = new CSS3DRenderer()
tagRenderer.setSize(window.innerWidth, window.innerHeight)
tagRenderer.domElement.style.position = 'absolute'
tagRenderer.domElement.style.top = '0px'
tagRenderer.domElement.style.left = '0px'
tagRenderer.domElement.style.pointerEvents = 'none'

document.body.appendChild(tagRenderer.domElement)

export { createTag, tagRenderer }
