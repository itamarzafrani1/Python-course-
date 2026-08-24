
const data=window.COURSE_DATA,stateKey="python-mastery-progress-v2";
let completed=new Set(JSON.parse(localStorage.getItem(stateKey)||"[]")),pyodideInstance=null,pyLoading=null;
const allLessons=data.levels.flatMap(level=>level.lessons.map(x=>({...x,level})));
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function nextLesson(){return allLessons.find(x=>!completed.has(x.id))||allLessons[allLessons.length-1]}
function save(){localStorage.setItem(stateKey,JSON.stringify([...completed]));render()}
function updateProgress(){const pct=Math.round(completed.size/data.totalLessons*100);document.querySelector("#progressPct").textContent=pct+"%";document.querySelector("#progressRing").style.background=`conic-gradient(var(--accent) ${pct}%,#243448 ${pct}%)`;document.querySelector("#summary").textContent=`${data.levels.length} רמות • ${data.totalLessons} שיעורים • ${completed.size} הושלמו • תרגילי השלמה + Python Lab`;}
function render(){
 const q=document.querySelector("#search").value.trim().toLowerCase(),d=document.querySelector("#difficulty").value,host=document.querySelector("#levels");host.innerHTML="";
 data.levels.forEach(level=>{if(d&&level.difficulty!==d)return;const lessons=level.lessons.filter(x=>!q||`${x.title} ${x.concepts}`.toLowerCase().includes(q));if(!lessons.length)return;
 const done=level.lessons.filter(x=>completed.has(x.id)).length,pct=Math.round(done/level.lessons.length*100),el=document.createElement("section");el.className="level";
 el.innerHTML=`<div class="level-head"><div><h3>${esc(level.title)}</h3><p>${esc(level.desc)}</p><div class="level-progress"><i style="width:${pct}%"></i></div></div><span class="badge">${esc(level.difficulty)} • ${done}/${level.lessons.length}</span></div><div class="lesson-list">${lessons.map((x,i)=>`<article class="lesson-card ${completed.has(x.id)?"done":""}" data-id="${x.id}"><div class="lesson-number">${level.id} • ${i+1}</div><h4>${esc(x.title)}</h4><p>${esc(x.concepts)}</p></article>`).join("")}</div>`;host.appendChild(el)});
 host.querySelectorAll(".lesson-card").forEach(e=>e.addEventListener("click",()=>openLesson(e.dataset.id)));updateProgress();
}
function openLesson(id){
 const x=allLessons.find(v=>v.id===id),body=document.querySelector("#lessonContent");if(!x)return;
 body.innerHTML=`<div class="eyebrow">${esc(x.level.title)} • ${esc(x.level.difficulty)}</div><h2>${esc(x.title)}</h2><p><strong>נושאים:</strong> ${esc(x.concepts)}</p>
 <section class="lesson-section"><h3>🎯 בסוף השיעור תדע</h3><ul class="objectives">${x.objectives.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></section>
 <section class="lesson-section"><h3>🧠 למה צריך את זה?</h3><div class="callout">${esc(x.why)}</div></section>
 <section class="lesson-section"><h3>🔬 להבין לעומק</h3><ul class="deep-list">${x.deep.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></section>
 <section class="lesson-section"><h3>💻 דוגמה</h3><pre><code>${esc(x.starter)}</code></pre><div class="mini-actions"><button type="button" class="open-lab">פתח ב-Python Lab</button></div></section>
 <section class="lesson-section"><h3>⚠️ טעויות נפוצות</h3><div class="callout warning"><ul class="mistake-list">${x.mistakes.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div></section>
 <section class="lesson-section"><h3>🧩 השלמת קוד</h3><div class="fill-card"><p>${esc(x.fill.prompt)}</p><textarea class="fill-code" spellcheck="false">${esc(x.fill.code)}</textarea><div class="mini-actions"><button type="button" class="check-fill">בדוק</button><button type="button" class="secondary show-fill">פתרון</button></div><div class="fill-result"></div></div></section>
 <section class="lesson-section"><h3>🏋️ תרגיל</h3><div class="exercise">${esc(x.exercise)}</div></section>
 <section class="lesson-section"><h3>🔥 Challenge</h3><div class="callout">${esc(x.challenge)}</div></section>
 <section class="lesson-section"><h3>❓ שאלות חזרה</h3>${x.quiz.map((qa,n)=>`<div class="quiz"><strong>${n+1}. ${esc(qa.q)}</strong><div class="mini-actions"><button class="secondary reveal" type="button">הצג תשובה</button></div><div class="answer">${esc(qa.a)}</div></div><br>`).join("")}</section>
 <button class="complete" type="button">${completed.has(x.id)?"הושלם ✓ — לחץ לביטול":"סמן שיעור כהושלם"}</button>`;
 body.querySelectorAll(".reveal").forEach(b=>b.addEventListener("click",()=>b.closest(".quiz").classList.toggle("show-answer")));
 body.querySelector(".open-lab").addEventListener("click",()=>openLab(x.starter));
 body.querySelector(".check-fill").addEventListener("click",()=>{const val=body.querySelector(".fill-code").value,out=body.querySelector(".fill-result"),ok=!val.includes("____")&&val.includes(x.fill.answer);out.className="fill-result "+(ok?"ok":"bad");out.textContent=ok?"✓ נכון. עכשיו נסה להסביר למה התשובה נכונה.":"עדיין לא. החלף את ____ ונסה שוב.";});
 body.querySelector(".show-fill").addEventListener("click",()=>body.querySelector(".fill-result").textContent=`פתרון: ${x.fill.answer}`);
 body.querySelector(".complete").addEventListener("click",()=>{completed.has(id)?completed.delete(id):completed.add(id);save();openLesson(id)});
 document.querySelector("#lessonDialog").showModal();
}
function openLab(code=""){if(code)document.querySelector("#codeEditor").value=code;document.querySelector("#labDialog").showModal()}
async function ensurePyodide(){
 if(pyodideInstance)return pyodideInstance;if(pyLoading)return pyLoading;document.querySelector("#pyStatus").textContent="טוען Python…";
 pyLoading=new Promise((resolve,reject)=>{const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js";s.onload=async()=>{try{pyodideInstance=await loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.27.7/full/"});document.querySelector("#pyStatus").textContent="Python מוכן ✓";resolve(pyodideInstance)}catch(e){reject(e)}};s.onerror=()=>reject(new Error("לא ניתן לטעון Python. בדוק חיבור לאינטרנט."));document.head.appendChild(s)});return pyLoading;
}
async function runCode(){const out=document.querySelector("#codeOutput"),btn=document.querySelector("#runCode");btn.disabled=true;out.textContent="טוען/מריץ…";try{const py=await ensurePyodide();py.runPython("import sys, io\n_buf=io.StringIO()\nsys.stdout=_buf\nsys.stderr=_buf");const result=await py.runPythonAsync(document.querySelector("#codeEditor").value);let printed=py.runPython("_buf.getvalue()");if(result!==undefined&&result!==null&&String(result)!=="None")printed+=(printed?"\n":"")+String(result);out.textContent=printed||"(הקוד הסתיים ללא פלט)"}catch(e){out.textContent="Error:\n"+e}finally{btn.disabled=false}}
document.querySelector("#search").addEventListener("input",render);document.querySelector("#difficulty").addEventListener("change",render);
document.querySelector("#continueBtn").addEventListener("click",()=>openLesson(nextLesson().id));document.querySelector("#navContinue").addEventListener("click",()=>openLesson(nextLesson().id));
document.querySelector("#playgroundBtn").addEventListener("click",()=>openLab());document.querySelector("#navLab").addEventListener("click",()=>openLab());document.querySelector("#homeBtn").addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
document.querySelector("#runCode").addEventListener("click",runCode);document.querySelector("#clearOutput").addEventListener("click",()=>document.querySelector("#codeOutput").textContent="");
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));render();
