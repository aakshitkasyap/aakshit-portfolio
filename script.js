const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const certData={python:{provider:'SAYLOR · CERTIFICATION',title:'Python for Data Science',description:'A certification focused on using Python concepts and programming techniques in the context of data science and analysis.',symbol:'Py',label:'PYTHON · DATA · ANALYSIS',tags:['Python','Data Science','Programming']},cpp:{provider:'SAYLOR · CERTIFICATION',title:'C++ Programming',description:'A programming certification centered on C++ fundamentals, programming concepts, and object-oriented problem solving.',symbol:'C++',label:'C++ · OOP · PROBLEM SOLVING',tags:['C++','OOP','Programming']},ai:{provider:'SAYLOR · CERTIFICATION',title:'Artificial Intelligence',description:'A certification representing foundational learning in artificial intelligence concepts and technologies behind intelligent systems.',symbol:'AI',label:'AI · INTELLIGENCE · SYSTEMS',tags:['Artificial Intelligence','Technology']},javascript:{provider:'UPGRAD · CERTIFICATION',title:'Advanced JavaScript',description:'A certification focused on advanced JavaScript concepts used to create interactive and dynamic web experiences.',symbol:'JS',label:'JAVASCRIPT · WEB · INTERACTION',tags:['JavaScript','Web Development','Frontend']},health:{provider:'EDUTECHHUB · CERTIFICATION',title:'Healthy Habits for Healthy Life',description:'A certification focused on awareness of healthy habits and practical principles for maintaining a healthy lifestyle.',symbol:'✦',label:'HEALTH · HABITS · WELLNESS',tags:['Healthy Habits','Wellness']}};
const modal=document.getElementById('certModal');const art=document.getElementById('certArt');const provider=document.getElementById('certProvider');const title=document.getElementById('certTitle');const desc=document.getElementById('certDescription');const tags=document.getElementById('certTags');document.querySelectorAll('.certificate[data-cert]').forEach(c=>c.addEventListener('click',()=>{const d=certData[c.dataset.cert];provider.textContent=d.provider;title.textContent=d.title;desc.textContent=d.description;tags.innerHTML=d.tags.map(t=>`<span>${t}</span>`).join('');art.innerHTML=`<div class="cert-symbol">${d.symbol}</div><div class="art-label">${d.label}</div>`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));function closeCert(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}document.querySelectorAll('[data-close-cert]').forEach(e=>e.addEventListener('click',closeCert));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCert()});
const cursor=document.createElement('div');cursor.className='cursor-glow';document.body.appendChild(cursor);let mx=-100,my=-100,x=-100,y=-100;window.addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY});function tick(){x+=(mx-x)*.16;y+=(my-y)*.16;cursor.style.transform=`translate3d(${x}px,${y}px,0)`;requestAnimationFrame(tick)}tick();document.querySelectorAll('a,button,.certificate').forEach(e=>{e.addEventListener('mouseenter',()=>cursor.classList.add('cursor-hover'));e.addEventListener('mouseleave',()=>cursor.classList.remove('cursor-hover'))});
