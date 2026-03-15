/*
=========================================================
IAI SUPER ECOSYSTEM MAP
Vision Pro Style 3D Ecosystem Navigator
IAI.ONE ROOT PORTAL
=========================================================
*/

(function(){

if(typeof THREE === "undefined"){
console.warn("Three.js not loaded");
return;
}

const container = document.getElementById("superEcosystemMap");
if(!container) return;


/* =====================================================
SCENE
===================================================== */

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x04060a);


/* =====================================================
CAMERA
===================================================== */

const camera = new THREE.PerspectiveCamera(
60,
container.clientWidth/container.clientHeight,
0.1,
10000
);

camera.position.set(0,80,420);


/* =====================================================
RENDERER
===================================================== */

const renderer = new THREE.WebGLRenderer({
antialias:true,
alpha:true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth,container.clientHeight);

container.appendChild(renderer.domElement);


/* =====================================================
LIGHTING
===================================================== */

const ambient = new THREE.AmbientLight(0xffffff,0.8);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff,0.7);
directional.position.set(200,200,200);
scene.add(directional);


/* =====================================================
STARFIELD
===================================================== */

const starGeometry = new THREE.BufferGeometry();
const starVertices = [];

for(let i=0;i<25000;i++){

const x = THREE.MathUtils.randFloatSpread(5000);
const y = THREE.MathUtils.randFloatSpread(5000);
const z = THREE.MathUtils.randFloatSpread(5000);

starVertices.push(x,y,z);

}

starGeometry.setAttribute(
'position',
new THREE.Float32BufferAttribute(starVertices,3)
);

const starMaterial = new THREE.PointsMaterial({
color:0xffffff,
size:1
});

const stars = new THREE.Points(starGeometry,starMaterial);
scene.add(stars);


/* =====================================================
PLATFORM DATA
===================================================== */

const platforms = [

{
name:"IAI.ONE",
url:"https://iai.one",
type:"core",
position:[0,0,0],
size:16
},

{
name:"LifeCode",
url:"https://lifecode.iai.one",
type:"ai",
position:[140,40,-40]
},

{
name:"IAI Flow",
url:"https://flow.iai.one",
type:"ai",
position:[-160,60,40]
},

{
name:"Nhà Chung",
url:"https://nhachung.org",
type:"community",
position:[180,-60,-20]
},

{
name:"Muốn Nói",
url:"https://muonnoi.org",
type:"community",
position:[-200,-50,60]
},

{
name:"Đường Sao Tỏa Sáng",
url:"https://duongsaotoasang.com",
type:"knowledge",
position:[80,-120,-60]
},

{
name:"Trần Hà Tâm",
url:"https://tranhatam.com",
type:"creator",
position:[-60,120,50]
}

];


/* =====================================================
NODE MATERIAL COLORS
===================================================== */

const colors = {

core:0xd8bc77,
ai:0x4cc9f0,
community:0x52b788,
knowledge:0xf72585,
creator:0xff9f1c

};


/* =====================================================
CREATE NODES
===================================================== */

const nodes = [];

platforms.forEach(p=>{

const size = p.size || 10;

const geometry = new THREE.SphereGeometry(size,32,32);

const material = new THREE.MeshStandardMaterial({
color:colors[p.type] || 0xffffff,
metalness:0.3,
roughness:0.2
});

const mesh = new THREE.Mesh(geometry,material);

mesh.position.set(...p.position);

mesh.userData = p;

scene.add(mesh);

nodes.push(mesh);

});


/* =====================================================
CONNECTION NETWORK
===================================================== */

nodes.forEach((node,i)=>{

if(i===0) return;

const points = [

new THREE.Vector3(0,0,0),
node.position

];

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const material = new THREE.LineBasicMaterial({
color:0x888888,
transparent:true,
opacity:0.3
});

const line = new THREE.Line(geometry,material);

scene.add(line);

});


/* =====================================================
INTERACTION
===================================================== */

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

container.addEventListener("mousemove",function(e){

const rect = container.getBoundingClientRect();

mouse.x = ((e.clientX - rect.left)/rect.width)*2 -1;
mouse.y = -((e.clientY - rect.top)/rect.height)*2 +1;

raycaster.setFromCamera(mouse,camera);

const hits = raycaster.intersectObjects(nodes);

nodes.forEach(n => n.scale.set(1,1,1));

if(hits.length){

hits[0].object.scale.set(1.4,1.4,1.4);

}

});


container.addEventListener("click",function(){

raycaster.setFromCamera(mouse,camera);

const hits = raycaster.intersectObjects(nodes);

if(hits.length){

const node = hits[0].object.userData;

window.open(node.url,"_blank");

}

});


/* =====================================================
CAMERA AUTO DRIFT
===================================================== */

let angle = 0;

function moveCamera(){

angle += 0.0006;

camera.position.x = Math.sin(angle)*420;
camera.position.z = Math.cos(angle)*420;

camera.lookAt(0,0,0);

}


/* =====================================================
ANIMATION
===================================================== */

function animate(){

requestAnimationFrame(animate);

stars.rotation.y += 0.0002;

moveCamera();

renderer.render(scene,camera);

}

animate();


/* =====================================================
RESIZE
===================================================== */

window.addEventListener("resize",()=>{

camera.aspect = container.clientWidth/container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(container.clientWidth,container.clientHeight);

});

})();
