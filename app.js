
const data = window.COURSE_DATA;
const stateKey = "python-mastery-progress-v1";
let completed = new Set(JSON.parse(localStorage.getItem(stateKey) || "[]"));
let activeLesson = null;

const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const allLessons = data.levels.flatMap(l => l.lessons.map(x => ({...x, level:l})));

function save(){ localStorage.setItem(stateKey, JSON.stringify([...completed])); updateProgress(); render(); }
function updateProgress(){
  const pct = Math.round((completed.size / data.totalLessons) * 100);
  document.querySelector("#progressPct").textContent = pct+"%";
  document.querySelector("#progressRing").style.background = `conic-gradient(var(--accent) ${pct}%, #243448 ${pct}%)`;
  document.querySelector("#summary").textContent = `${data.levels.length} רמות • ${data.totalLessons} שיעורים • ${completed.size} הושלמו • יעד: ${data.pythonTarget}`;
}
function nextLesson(){ return allLessons.find(x => !completed.has(x.id)) || allLessons[allLessons.length-1]; }

function render(){
  const q = document.querySelector("#search").value.trim().toLowerCase();
  const d = document.querySelector("#difficulty").value;
  const host = document.querySelector("#levels");
  host.innerHTML = "";
  data.levels.forEach(level=>{
    if(d && level.difficulty !== d) return;
    const lessons = level.lessons.filter(x => !q || `${x.title} ${x.concepts} ${level.title}`.toLowerCase().includes(q));
    if(!lessons.length) return;
    const doneCount = level.lessons.filter(x=>completed.has(x.id)).length;
    const el = document.createElement("section");
    el.className="level";
    el.innerHTML = `<div class="level-head"><div><h3>${esc(level.title)}</h3><p>${esc(level.desc)}</p></div><span class="badge">${esc(level.difficulty)} • ${doneCount}/${level.lessons.length}</span></div>
      <div class="lesson-list">${lessons.map((x,i)=>`<article class="lesson-card ${completed.has(x.id)?'done':''}" data-id="${x.id}">
        <div class="lesson-number">${level.id} • ${i+1}</div><h4>${esc(x.title)}</h4><p>${esc(x.concepts)}</p>
      </article>`).join("")}</div>`;
    host.appendChild(el);
  });
  document.querySelectorAll(".lesson-card").forEach(el => el.onclick = () => openLesson(el.dataset.id));
  updateProgress();
}
function openLesson(id){
  const x = allLessons.find(v=>v.id===id); if(!x) return; activeLesson=id;
  const body = document.querySelector("#lessonContent");
  body.innerHTML = `
    <div class="eyebrow">${esc(x.level.title)} • ${esc(x.level.difficulty)}</div>
    <h2>${esc(x.title)}</h2>
    <p><strong>נושאים:</strong> ${esc(x.concepts)}</p>
    <h3>מה צריך להבין</h3>
    <ul>${x.theory.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>
    <h3>דוגמה</h3><pre><code>${esc(x.example)}</code></pre>
    <h3>תרגיל</h3><div class="exercise">${esc(x.exercise)}</div>
    <h3>בדיקת שליטה</h3><p>${esc(x.check)}</p>
    <h3>שאלות חזרה</h3>
    ${x.quiz.map((qa,n)=>`<div class="quiz"><strong>${n+1}. ${esc(qa.q)}</strong><br><button class="secondary reveal" type="button">הצג תשובה</button><div class="answer">${esc(qa.a)}</div></div><br>`).join("")}
    <button class="complete" type="button">${completed.has(x.id)?"סומן כהושלם ✓":"סמן שיעור כהושלם"}</button>`;
  body.querySelectorAll(".reveal").forEach(b=>b.onclick=()=>b.parentElement.classList.toggle("show-answer"));
  body.querySelector(".complete").onclick=()=>{
    completed.has(id) ? completed.delete(id) : completed.add(id); save(); openLesson(id);
  };
  document.querySelector("#lessonDialog").showModal();
}
document.querySelector("#search").addEventListener("input",render);
document.querySelector("#difficulty").addEventListener("change",render);
document.querySelector("#continueBtn").onclick=()=>openLesson(nextLesson().id);
document.querySelector("#navContinue").onclick=()=>openLesson(nextLesson().id);
document.querySelector("#resetBtn").onclick=()=>{ if(confirm("לאפס את כל ההתקדמות?")){completed.clear();save();}};
document.querySelectorAll("[data-jump]").forEach(b=>b.onclick=()=>{
  if(b.dataset.jump==="top") scrollTo({top:0,behavior:"smooth"});
  else document.querySelector(".progress-ring").scrollIntoView({behavior:"smooth"});
});
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
render();
