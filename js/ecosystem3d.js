const container = document.getElementById("ecosystem3d")

if(!container) return

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
container.clientWidth / container.clientHeight,
0.1,
1000
)

camera.position.z = 6

const renderer = new THREE.WebGLRenderer({
antialias:true,
alpha:true
})

renderer.setSize(container.clientWidth,400)

container.appendChild(renderer.domElement)



/* ======================================
   LIGHT
====================================== */

const light = new THREE.PointLight(0xffffff,1)

light.position.set(5,5,5)

scene.add(light)



/* ======================================
   CORE NODE
====================================== */

const coreGeo = new THREE.SphereGeometry(.5,32,32)

const coreMat = new THREE.MeshStandardMaterial({

color:0x00e5ff,
emissive:0x00e5ff,
emissiveIntensity:.4

})

const core = new THREE.Mesh(coreGeo,coreMat)

scene.add(core)



/* ======================================
   PLATFORM NODES
====================================== */

const platforms = [

{ name:"Flow", url:"https://flow.iai.one" },
{ name:"LifeCode", url:"https://lifecode.iai.one" },
{ name:"Research", url:"https://research.iai.one" },
{ name:"Community", url:"https://community.iai.one" },
{ name:"Projects", url:"https://projects.iai.one" }

]

const nodes = []

platforms.forEach((p,i)=>{

const geo = new THREE.SphereGeometry(.25,16,16)

const mat = new THREE.MeshStandardMaterial({

color:0xffffff

})

const node = new THREE.Mesh(geo,mat)

scene.add(node)

nodes.push({

mesh:node,
data:p,
angle:i*(Math.PI*2/platforms.length)

})

})



/* ======================================
   ORBIT ANIMATION
====================================== */

function animate(){

requestAnimationFrame(animate)

core.rotation.y += 0.01

nodes.forEach(n=>{

n.angle += 0.01

const r = 2.2

n.mesh.position.x = Math.cos(n.angle)*r
n.mesh.position.z = Math.sin(n.angle)*r

})

renderer.render(scene,camera)

}

animate()



/* ======================================
   CLICK INTERACTION
====================================== */

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

window.addEventListener("click",(event)=>{

const rect = renderer.domElement.getBoundingClientRect()

mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

raycaster.setFromCamera(mouse,camera)

const intersects = raycaster.intersectObjects(nodes.map(n=>n.mesh))

if(intersects.length){

const obj = intersects[0].object

const found = nodes.find(n=>n.mesh===obj)

if(found){

window.open(found.data.url)

}

}

})
