/*
=====================================================
IAI APP LAUNCHPAD
Production version
=====================================================
*/

(function(){

const container = document.getElementById("appLaunchpad");

if(!container) return;

const apps = [

{
name:"LifeCode",
url:"https://lifecode.iai.one",
icon:"/assets/icons/lifecode.svg"
},

{
name:"IAI Flow",
url:"https://flow.iai.one",
icon:"/assets/icons/flow.svg"
},

{
name:"Community",
url:"https://community.iai.one",
icon:"/assets/icons/community.svg"
},

{
name:"Research",
url:"https://research.iai.one",
icon:"/assets/icons/research.svg"
},

{
name:"Projects",
url:"https://projects.iai.one",
icon:"/assets/icons/projects.svg"
}

];


apps.forEach(app => {

const el = document.createElement("div");

el.className = "app-icon";

el.innerHTML = `
<img src="${app.icon}" alt="${app.name}" class="app-img">
<p>${app.name}</p>
`;

el.onclick = () => window.open(app.url);

container.appendChild(el);

});

})();
