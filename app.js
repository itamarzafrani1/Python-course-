
const data = window.COURSE_DATA;
const progressKey = "python-mastery-complete-progress-v1";
const skillKey = "python-mastery-skill-state-v1";
let completed = new Set(JSON.parse(localStorage.getItem(progressKey) || "[]"));
let skills = JSON.parse(localStorage.getItem(skillKey) || "{}");
let pyodideInstance = null;
let pyLoading = null;
let labDefault = `name = "Python"\nfor i in range(3):\n    print(i, name)`;

const allLessons = data.levels.flatMap(level => level.lessons.map(lesson => ({...lesson, level})));
const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function stateFor(id) {
  if (!skills[id]) skills[id] = { fill:false, exerciseViewed:false, challengeViewed:false, quizViewed:0 };
  return skills[id];
}
function persist() {
  localStorage.setItem(progressKey, JSON.stringify([...completed]));
  localStorage.setItem(skillKey, JSON.stringify(skills));
}
function nextLesson() {
  return allLessons.find(lesson => !completed.has(lesson.id)) || allLessons[allLessons.length - 1];
}
function masteryPoints() {
  let earned = 0, possible = allLessons.length * 5;
  for (const lesson of allLessons) {
    const s = stateFor(lesson.id);
    if (s.fill) earned++;
    if (s.exerciseViewed) earned++;
    if (s.challengeViewed) earned++;
    if (s.quizViewed >= lesson.quiz.length) earned++;
    if (completed.has(lesson.id)) earned++;
  }
  return {earned, possible, pct: Math.round(earned / possible * 100)};
}
function updateProgress() {
  const completionPct = Math.round(completed.size / data.totalLessons * 100);
  const mastery = masteryPoints();
  document.querySelector("#progressPct").textContent = completionPct + "%";
  document.querySelector("#progressRing").style.background =
    `conic-gradient(var(--accent) ${completionPct}%, #21384d ${completionPct}%)`;
  document.querySelector("#summary").textContent =
    `${data.levels.length} רמות • ${data.totalLessons} שיעורים • ${completed.size} שיעורים הושלמו`;
  document.querySelector("#masterySummary").textContent =
    `Mastery: ${mastery.pct}% • כולל השלמות קוד, פתרונות, Quiz ו-Challenges`;
}
function render() {
  const q = document.querySelector("#search").value.trim().toLowerCase();
  const difficulty = document.querySelector("#difficulty").value;
  const host = document.querySelector("#levels");
  host.innerHTML = "";

  data.levels.forEach(level => {
    if (difficulty && level.difficulty !== difficulty) return;
    const visible = level.lessons.filter(l =>
      !q || `${l.title} ${l.concepts} ${level.title}`.toLowerCase().includes(q)
    );
    if (!visible.length) return;

    const done = level.lessons.filter(l => completed.has(l.id)).length;
    const pct = Math.round(done / level.lessons.length * 100);
    const section = document.createElement("section");
    section.className = "level";
    section.innerHTML = `
      <div class="level-head">
        <div>
          <h3>${esc(level.title)}</h3>
          <p>${esc(level.desc)}</p>
          <div class="level-progress"><i style="width:${pct}%"></i></div>
        </div>
        <span class="badge">${esc(level.difficulty)} • ${done}/${level.lessons.length}</span>
      </div>
      <div class="lesson-list">
        ${visible.map((lesson, i) => `
          <article class="lesson-card ${completed.has(lesson.id) ? "done" : ""}" data-id="${lesson.id}">
            <div class="lesson-number">${level.id} • ${i + 1}</div>
            <h4>${esc(lesson.title)}</h4>
            <p>${esc(lesson.concepts)}</p>
          </article>`).join("")}
      </div>`;
    host.appendChild(section);
  });

  host.querySelectorAll(".lesson-card").forEach(card =>
    card.addEventListener("click", () => openLesson(card.dataset.id))
  );
  persist();
  updateProgress();
}

function solutionSection(title, solution, kind) {
  return `
    <div class="mini-actions">
      <button type="button" class="secondary show-solution" data-kind="${kind}">הצג פתרון מלא</button>
      <button type="button" class="blue lab-solution" data-code="${encodeURIComponent(solution)}">פתח פתרון ב-Lab</button>
    </div>
    <div class="solution-box" data-solution="${kind}">
      <div class="solution-label">✓ פתרון אפשרי</div>
      <pre><code>${esc(solution)}</code></pre>
      <p class="section-meta">אל תסתפק בהעתקה: עבור שורה-שורה וודא שאתה מסוגל להסביר למה כל חלק קיים.</p>
    </div>`;
}

function openLesson(id) {
  const lesson = allLessons.find(x => x.id === id);
  if (!lesson) return;
  const s = stateFor(id);
  const body = document.querySelector("#lessonContent");

  body.innerHTML = `
    <div class="eyebrow">${esc(lesson.level.title)} • ${esc(lesson.level.difficulty)}</div>
    <h2>${esc(lesson.title)}</h2>
    <p><strong>נושאים:</strong> ${esc(lesson.concepts)}</p>

    <section class="lesson-section">
      <h3>🧭 איך ללמוד את השיעור</h3>
      <ol class="steps-list">${lesson.walkthrough.map(v => `<li>${esc(v)}</li>`).join("")}</ol>
    </section>

    <section class="lesson-section">
      <h3>🎯 מטרות</h3>
      <ul class="objectives">${lesson.objectives.map(v => `<li>${esc(v)}</li>`).join("")}</ul>
    </section>

    <section class="lesson-section">
      <h3>🧠 למה צריך את זה?</h3>
      <div class="callout">${esc(lesson.why)}</div>
    </section>

    <section class="lesson-section">
      <h3>🔬 להבין לעומק</h3>
      <ul class="deep-list">${lesson.deep.map(v => `<li>${esc(v)}</li>`).join("")}</ul>
    </section>

    <section class="lesson-section">
      <h3>💻 דוגמה עובדת</h3>
      <pre><code>${esc(lesson.starter)}</code></pre>
      <div class="mini-actions">
        <button type="button" class="blue open-example-lab">הרץ/שנה ב-Python Lab</button>
      </div>
    </section>

    <section class="lesson-section">
      <h3>⚠️ טעויות נפוצות</h3>
      <div class="callout warning">
        <ul class="mistake-list">${lesson.mistakes.map(v => `<li>${esc(v)}</li>`).join("")}</ul>
      </div>
    </section>

    <section class="lesson-section">
      <h3>🧩 תרגיל השלמת קוד</h3>
      <div class="fill-card">
        <p>${esc(lesson.fill.prompt)}</p>
        <textarea class="fill-code" spellcheck="false">${esc(lesson.fill.code)}</textarea>
        <div class="mini-actions">
          <button type="button" class="check-fill">בדוק תשובה</button>
          <button type="button" class="secondary show-fill-answer">הצג את ההשלמה</button>
          <button type="button" class="blue fill-to-lab">פתח ב-Lab</button>
        </div>
        <div class="fill-result" aria-live="polite">${s.fill ? "✓ כבר פתרת את ההשלמה בשיעור הזה." : ""}</div>
      </div>
    </section>

    <section class="lesson-section">
      <h3>🐞 Bug Hunt</h3>
      <div class="bug-card">
        <p>${esc(lesson.bug_hunt.prompt)}</p>
        <pre><code>${esc(lesson.bug_hunt.code)}</code></pre>
        <p class="section-meta">רמז: ${esc(lesson.bug_hunt.hint)}</p>
        <button type="button" class="blue bug-to-lab">נסה לשבור ולתקן ב-Lab</button>
      </div>
    </section>

    <section class="lesson-section">
      <h3>🏋️ תרגיל קצר • 2–5 דקות</h3>
      <p class="section-meta">מטרה: לתרגל פעולה אחת קטנה בלי להקליד פרויקט שלם בטלפון.</p><div class="exercise">${esc(lesson.exercise)}</div>
      ${solutionSection("תרגיל", lesson.exercise_solution, "exercise")}
    </section>

    <section class="lesson-section">
      <h3>🔥 Challenge • 5–10 דקות</h3>
      <p class="section-meta">מטרה: לקחת את אותו רעיון צעד אחד קדימה — יותר חשיבה, עדיין מעט הקלדה.</p><div class="callout">${esc(lesson.challenge)}</div>
      ${solutionSection("Challenge", lesson.challenge_solution, "challenge")}
    </section>

    <section class="lesson-section">
      <h3>❓ שאלות חזרה</h3>
      ${lesson.quiz.map((qa, n) => `
        <div class="quiz">
          <strong>${n + 1}. ${esc(qa.q)}</strong>
          <div class="mini-actions">
            <button class="secondary reveal" type="button" data-index="${n}">הצג תשובה</button>
          </div>
          <div class="answer">${esc(qa.a)}</div>
        </div>`).join("")}
    </section>

    <section class="lesson-section">
      <h3>✅ Mastery Checklist</h3>
      <ul class="mastery-list">${lesson.mastery.map(v => `<li>${esc(v)}</li>`).join("")}</ul>
    </section>

    <button class="complete" type="button">
      ${completed.has(id) ? "השיעור הושלם ✓ — לחץ לביטול" : "סמן שיעור כהושלם"}
    </button>`;

  body.querySelector(".open-example-lab").addEventListener("click", () => openLab(lesson.starter));
  body.querySelector(".fill-to-lab").addEventListener("click", () => {
    openLab(body.querySelector(".fill-code").value);
  });
  body.querySelector(".bug-to-lab").addEventListener("click", () => openLab(lesson.bug_hunt.code));

  body.querySelector(".check-fill").addEventListener("click", () => {
    const editor = body.querySelector(".fill-code");
    const out = body.querySelector(".fill-result");
    const value = editor.value;
    const answer = lesson.fill.answer.trim();
    const ok = !value.includes("____") && value.includes(answer);
    out.className = "fill-result " + (ok ? "ok" : "bad");
    if (ok) {
      s.fill = true;
      out.textContent = "✓ נכון. עכשיו נסה להסביר למה ההשלמה הזאת נכונה.";
      persist();
      updateProgress();
    } else {
      out.textContent = "עדיין לא. החלף את ____ בקוד המתאים ונסה שוב.";
    }
  });

  body.querySelector(".show-fill-answer").addEventListener("click", () => {
    const out = body.querySelector(".fill-result");
    out.className = "fill-result";
    out.textContent = `ההשלמה: ${lesson.fill.answer}`;
  });

  body.querySelectorAll(".show-solution").forEach(btn => {
    btn.addEventListener("click", () => {
      const kind = btn.dataset.kind;
      const box = body.querySelector(`[data-solution="${kind}"]`);
      box.classList.toggle("visible");
      btn.textContent = box.classList.contains("visible") ? "הסתר פתרון" : "הצג פתרון מלא";
      if (box.classList.contains("visible")) {
        if (kind === "exercise") s.exerciseViewed = true;
        if (kind === "challenge") s.challengeViewed = true;
        persist();
        updateProgress();
      }
    });
  });

  body.querySelectorAll(".lab-solution").forEach(btn => {
    btn.addEventListener("click", () => openLab(decodeURIComponent(btn.dataset.code)));
  });

  body.querySelectorAll(".reveal").forEach(btn => {
    btn.addEventListener("click", () => {
      const quiz = btn.closest(".quiz");
      quiz.classList.toggle("show-answer");
      if (quiz.classList.contains("show-answer")) {
        s.quizViewed = Math.max(s.quizViewed, Number(btn.dataset.index) + 1);
        persist();
        updateProgress();
      }
    });
  });

  body.querySelector(".complete").addEventListener("click", () => {
    completed.has(id) ? completed.delete(id) : completed.add(id);
    persist();
    render();
    openLesson(id);
  });

  document.querySelector("#lessonDialog").showModal();
}

function openLab(code = "") {
  if (code) {
    document.querySelector("#codeEditor").value = code;
    labDefault = code;
  }
  document.querySelector("#labDialog").showModal();
}

async function ensurePyodide() {
  if (pyodideInstance) return pyodideInstance;
  if (pyLoading) return pyLoading;

  const status = document.querySelector("#pyStatus");
  status.textContent = "טוען Python…";

  pyLoading = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/pyodide/v314.0.5/full/pyodide.js";
    script.async = true;

    const timer = setTimeout(() => {
      reject(new Error("Pyodide loading timed out after 30 seconds"));
    }, 30000);

    script.onload = async () => {
      try {
        if (typeof loadPyodide !== "function") {
          throw new Error("Pyodide script loaded, but loadPyodide() is unavailable");
        }
        const runtime = await loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v314.0.5/full/"
        });
        const selfTest = runtime.runPython("1 + 2");
        if (Number(selfTest) !== 3) throw new Error("Python engine self-test failed");
        clearTimeout(timer);
        pyodideInstance = runtime;
        status.textContent = "Python מוכן ✓";
        resolve(pyodideInstance);
      } catch (error) {
        clearTimeout(timer);
        status.textContent = "טעינת Python נכשלה";
        reject(error);
      }
    };

    script.onerror = () => {
      clearTimeout(timer);
      status.textContent = "טעינת Python נכשלה";
      reject(new Error("Could not download Pyodide from jsDelivr. Check the internet connection and content blockers."));
    };

    document.head.appendChild(script);
  });

  try {
    return await pyLoading;
  } catch (error) {
    pyLoading = null;
    throw error;
  }
}
async function runCode() {
  const out = document.querySelector("#codeOutput");
  const button = document.querySelector("#runCode");
  button.disabled = true;
  out.textContent = "טוען/מריץ…";

  try {
    const py = await ensurePyodide();
    py.runPython(`
import sys, io
_buf = io.StringIO()
sys.stdout = _buf
sys.stderr = _buf
`);
    const result = await py.runPythonAsync(document.querySelector("#codeEditor").value);
    let printed = String(py.runPython("_buf.getvalue()") || "");
    if (result !== undefined && result !== null && String(result) !== "None") {
      printed += (printed ? "\n" : "") + String(result);
    }
    out.textContent = printed || "(הקוד הסתיים ללא פלט)";
  } catch (error) {
    const message = error?.message || error?.toString?.() || "Unknown error";
    out.textContent = "לא הצלחתי להריץ את Python.\n\n" + message + "\n\nאם זו ההרצה הראשונה: ודא שיש חיבור לאינטרנט ונסה שוב.";
    console.error("Python Lab error:", error);
  } finally {
    button.disabled = false;
  }
}
document.querySelector("#search").addEventListener("input", render);
document.querySelector("#difficulty").addEventListener("change", render);
document.querySelector("#continueBtn").addEventListener("click", () => openLesson(nextLesson().id));
document.querySelector("#navContinue").addEventListener("click", () => openLesson(nextLesson().id));
document.querySelector("#playgroundBtn").addEventListener("click", () => openLab());
document.querySelector("#navLab").addEventListener("click", () => openLab());
document.querySelector("#homeBtn").addEventListener("click", () => scrollTo({top:0, behavior:"smooth"}));
document.querySelector("#runCode").addEventListener("click", runCode);
document.querySelector("#resetLab").addEventListener("click", () => {
  document.querySelector("#codeEditor").value = labDefault;
  document.querySelector("#codeOutput").textContent = "הפלט יופיע כאן…";
});
document.querySelector("#clearOutput").addEventListener("click", () => {
  document.querySelector("#codeOutput").textContent = "";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}
render();
