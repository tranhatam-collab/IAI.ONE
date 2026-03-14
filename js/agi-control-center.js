/* =========================================================
   IAI AGI CONTROL CENTER
   System Dashboard Engine
========================================================= */

const dashboard = {

systems: [

{
name:"IAI Flow",
url:"https://flow.iai.one",
type:"AGI Tool"
},

{
name:"LifeCode",
url:"https://lifecode.iai.one",
type:"Human Intelligence"
},

{
name:"Research",
url:"https://research.iai.one",
type:"Knowledge Engine"
},

{
name:"Community",
url:"https://community.iai.one",
type:"Network"
},

{
name:"Projects",
url:"https://projects.iai.one",
type:"Ecosystem"
}

]

}



/* ========================================
   RENDER DASHBOARD
======================================== */

function renderControlCenter(){

const container =
document.getElementById("agi-control-center")

if(!container) return

container.innerHTML = ""

dashboard.systems.forEach(sys=>{

const card = document.createElement("div")

card.className = "control-card"

card.innerHTML = `

<h3>${sys.name}</h3>

<p>${sys.type}</p>

<a href="${sys.url}" target="_blank">
Open Platform
</a>

`

container.appendChild(card)

})

}



/* ========================================
   SYSTEM STATUS
======================================== */

async function checkSystems(){

dashboard.systems.forEach(sys=>{

fetch(sys.url,{mode:"no-cors"})
.then(()=>{

console.log("online:",sys.name)

})
.catch(()=>{

console.log("offline:",sys.name)

})

})

}



/* ========================================
   AUTO REFRESH
======================================== */

function startMonitoring(){

setInterval(()=>{

checkSystems()

},30000)

}



/* ========================================
   INIT
======================================== */

document.addEventListener("DOMContentLoaded",()=>{

renderControlCenter()

checkSystems()

startMonitoring()

})
