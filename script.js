
// Intro loader: keep it brief and never block the page unnecessarily.
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  setTimeout(() => loader.classList.add('done'), 650);
});
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
reveals.forEach((el, i) => { el.style.setProperty('--reveal-delay', `${Math.min((i % 5) * 80, 320)}ms`); observer.observe(el); });

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

const certData = {
  python:{provider:'SAYLOR · CERTIFICATION',title:'Python for Data Science',description:'A certification focused on Python concepts and programming techniques used in data science and analysis.',symbol:'Py',label:'PYTHON · DATA · ANALYSIS',tags:['Python','Data Science','Programming']},
  cpp:{provider:'SAYLOR · CERTIFICATION',title:'C++ Programming',description:'A programming certification centered on C++ fundamentals, programming concepts and object-oriented problem solving.',symbol:'C++',label:'C++ · OOP · PROBLEM SOLVING',tags:['C++','OOP','Programming']},
  ai:{provider:'SAYLOR · CERTIFICATION',title:'Artificial Intelligence',description:'A certification representing foundational learning in artificial intelligence concepts and intelligent systems.',symbol:'AI',label:'AI · INTELLIGENCE · SYSTEMS',tags:['Artificial Intelligence','Technology']},
  javascript:{provider:'UPGRAD · CERTIFICATION',title:'Advanced JavaScript',description:'A certification focused on advanced JavaScript concepts used to create interactive and dynamic web experiences.',symbol:'JS',label:'JAVASCRIPT · WEB · INTERACTION',tags:['JavaScript','Web Development','Frontend']},
  health:{provider:'EDUTECHHUB · CERTIFICATION',title:'Healthy Habits for Healthy Life',description:'A certification focused on awareness of healthy habits and practical principles for maintaining a healthy lifestyle.',symbol:'✦',label:'HEALTH · HABITS · WELLNESS',tags:['Healthy Habits','Wellness']}
};
const certModal=document.getElementById('certModal');
const art=document.getElementById('certArt'); const provider=document.getElementById('certProvider'); const title=document.getElementById('certTitle'); const desc=document.getElementById('certDescription'); const tags=document.getElementById('certTags');
document.querySelectorAll('.certificate[data-cert]').forEach(card=>card.addEventListener('click',()=>{const d=certData[card.dataset.cert]; if(!d)return; provider.textContent=d.provider; title.textContent=d.title; desc.textContent=d.description; tags.innerHTML=d.tags.map(t=>`<span>${t}</span>`).join(''); art.innerHTML=`<div class="cert-symbol">${d.symbol}</div><div class="art-label">${d.label}</div>`; certModal.classList.add('open'); certModal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';}));
function closeCert(){certModal.classList.remove('open');certModal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('[data-close-cert]').forEach(e=>e.addEventListener('click',closeCert));

const techData={
 esp32:{label:'MICROCONTROLLER',title:'ESP32',description:'A Wi-Fi and Bluetooth capable microcontroller used here as the central controller for collecting sensor readings and serving the monitoring interface.',icon:'ESP',tags:['Microcontroller','IoT','Wi-Fi']},
 mq3:{label:'GAS SENSOR',title:'MQ-3',description:'An alcohol-sensitive gas sensor used to detect changes in gas concentration in the monitoring setup.',icon:'MQ3',tags:['Gas sensing','Analog input']},
 mq6:{label:'GAS SENSOR',title:'MQ-6',description:'A gas sensor commonly used for detecting LPG and related combustible gases in monitoring applications.',icon:'MQ6',tags:['Gas sensing','LPG']},
 mq135:{label:'AIR-QUALITY SENSOR',title:'MQ-135',description:'A gas sensor used for monitoring changes associated with air quality and several gases in the surrounding environment.',icon:'MQ',tags:['Air quality','Gas sensing']},
 wifi:{label:'CONNECTIVITY',title:'Wi-Fi',description:'Provides wireless connectivity so the ESP32 can make sensor readings available to a browser-based monitoring interface.',icon:'WiFi',tags:['Wireless','Connectivity','IoT']},
 html:{label:'WEB INTERFACE',title:'HTML',description:'Used to structure the browser-based monitoring page that presents the sensor telemetry.',icon:'</>',tags:['HTML','Web UI']}
};
const techModal=document.getElementById('techModal'); const techIcon=document.getElementById('techIcon'); const techLabel=document.getElementById('techLabel'); const techTitle=document.getElementById('techTitle'); const techDescription=document.getElementById('techDescription'); const techTags=document.getElementById('techTags');
document.querySelectorAll('.tech-chip[data-tech]').forEach(btn=>btn.addEventListener('click',()=>{const d=techData[btn.dataset.tech]; if(!d)return;techLabel.textContent=d.label;techTitle.textContent=d.title;techDescription.textContent=d.description;techTags.innerHTML=d.tags.map(t=>`<span>${t}</span>`).join('');techIcon.textContent=d.icon;techModal.classList.add('open');techModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}));
function closeTech(){techModal.classList.remove('open');techModal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('[data-close-tech]').forEach(e=>e.addEventListener('click',closeTech));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCert();closeTech();}});

// Floating cyan cursor + soft trailing glow.
const cursor=document.createElement('div'); cursor.className='cursor-glow'; document.body.appendChild(cursor);
const cursorRing=document.createElement('div'); cursorRing.className='cursor-ring'; document.body.appendChild(cursorRing);
let mx=-100,my=-100,x=-100,y=-100,rx=-100,ry=-100;
window.addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;});
function tick(){x+=(mx-x)*.20;y+=(my-y)*.20;rx+=(mx-rx)*.08;ry+=(my-ry)*.08;cursor.style.transform=`translate3d(${x}px,${y}px,0)`;cursorRing.style.transform=`translate3d(${rx}px,${ry}px,0)`;requestAnimationFrame(tick);} tick();
document.querySelectorAll('a,button,.certificate,.research-card').forEach(el=>{el.addEventListener('mouseenter',()=>{cursor.classList.add('cursor-hover');cursorRing.classList.add('cursor-hover');});el.addEventListener('mouseleave',()=>{cursor.classList.remove('cursor-hover');cursorRing.classList.remove('cursor-hover');});});
