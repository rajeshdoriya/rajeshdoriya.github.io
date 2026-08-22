const styleUpdate=document.createElement('link');styleUpdate.rel='stylesheet';styleUpdate.href='assets/updates.css';document.head.appendChild(styleUpdate);
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
document.getElementById("year").textContent=new Date().getFullYear();
$(".menu").onclick=()=>$(".site-header").classList.toggle("open");
const years=[...new Set(publications.map(p=>p[0]))].sort((a,b)=>b-a), ys=$("#pubYear");
years.forEach(y=>{const o=document.createElement("option");o.value=y;o.textContent=y;ys.appendChild(o)});
function renderPubs(){const q=$("#pubSearch").value.toLowerCase(),type=$("#pubType").value,year=ys.value; const list=publications.filter(p=>(type==="all"||p[1]===type)&&(year==="all"||p[0]===year)&&p.join(" ").toLowerCase().includes(q)); $("#pubList").innerHTML=list.map(p=>`<article class="pub"><div class="tag">${p[1]} · ${p[0]}</div><h3>${p[2]}</h3><p>${p[3]}</p></article>`).join("")||`<div class="card">No matching publication found.</div>`;}
["input","change"].forEach(e=>{$("#pubSearch").addEventListener(e,renderPubs);$("#pubType").addEventListener(e,renderPubs);ys.addEventListener(e,renderPubs)});renderPubs();
$$(".subtabs button").forEach(b=>b.onclick=()=>{const parent=b.closest("section");$$(".subtabs button",parent).forEach(x=>x.classList.remove("active"));b.classList.add("active");const g=b.dataset.group;if(g){["proj","consult","patent"].forEach(id=>$("#"+id)?.classList.toggle("hidden",id!==g))}});
function renderCourses(level="all"){$("#courses").innerHTML=courses.filter(c=>level==="all"||c[0]===level).map(c=>`<article class="course"><b>${c[1]}</b><span>${c[0]} COURSE</span></article>`).join("")}
$$(".course-filter").forEach(b=>b.onclick=()=>{$$(".course-filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderCourses(b.dataset.level)});renderCourses();
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.site-header').classList.remove('open')));
// Add a prominent downloadable brief-profile action to the hero.
const heroActions=document.querySelector('.hero .actions');
if(heroActions && !document.querySelector('.brief-profile-btn')){const a=document.createElement('a');a.className='btn ghost brief-profile-btn';a.href='assets/brief-profile.pdf';a.target='_blank';a.rel='noopener';a.textContent='Download Brief Profile';heroActions.appendChild(a);}
