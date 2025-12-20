
// Fragenkatalog:
// correctIndex: 0,1,2 entspricht Antwort A,B,C
const QUESTIONS = [
    {
        type: "mc", // Multiple Choice
        img: "img/Einschulung.jpg",
        solutionImg: "img/Einschulung_Antwort.jpg",
        q: "Wann war das? 🧒🏼🎒",
        options: ["📅 2012", "📅 2013", "📅 2014"],
        correctIndex: 2,
        correctMsg: "Genau richtig, 2014 war’s. 🎉 Da war Pupsi noch richtig süß. 🥰🧒🏼", // Text bei richtiger Antwort
        wrongMsg: "Fast, 2014 war’s. Da war Pupsi noch richtig süß. 🥰🧒🏼" //  Text bei falscher Antwort
    },
    {
        type: "mc",
        img: "img/1000_Tage.jpg",
        solutionImg: "img/1000_Tage_Antwort.jpg",
        q: "Was steht auf dem Schild?",
        options: ["Emily 500 Tage", "Emily 1000 Tage", "Emily 2000 Tage"],
        correctIndex: 1,
        correctMsg: "Richtig! 🎉",
        wrongMsg: "Fast. 😄 Es waren 1000 Tage. "
    },
    {
        type: "mc",
        img: "img/Kroatien.jpg",
        solutionImg: "img/Kroatien_Antwort.jpg",
        q: "Wo waren wir da? 👩‍👧‍👦",
        options: ["🍕 Italien", "🌊 Kroatien", "💃 Spanien"],
        correctIndex: 1,
        correctMsg: "Stimmt! 2013 waren wir in Kroatien 🌞 Das war ein schöner Urlaub 🥰",
        wrongMsg: "Leider falsch 😕 2013 waren wir in Kroatien 🌞 Das war ein schöner Urlaub 🥰"
    },
    {
        type: "mc",
        img: "img/Charly.jpg",
        solutionImg: "img/Charly_Antwort.jpg",
        q: "Wann war das? 🐾",
        options: ["📅 2016", "📅 2017", "📅 2018"],
        correctIndex: 2,
        correctMsg: "Yes! 2018 kam Charly zu uns. 😊🐾", 
        wrongMsg: "Knapp daneben. 2018 kam Charly zu uns. 🐾" 
    },
    {
        type: "text",
        img: "img/Kleid.jpg",
        solutionImg: "img/Kleid_Antwort.jpg",
        q: "Welche Farbe hatte mein Abiball-Kleid?",
        answer: "rot",
        aliases: ["Rot"],
        correctMsg: "Stimmt! Respekt, gutes Gedächtnis. 👗🎉",
        wrongMsg: "Nope 😄 Rot war’s. 👗 Aber der Versuch zählt."
    },
    {
        type: "mc",
        img: "img/Grenze.jpg",
        solutionImg: "img/Grenze_Antwort.jpg",
        q: "An welcher Grenze stehen wir hier? 🥾",
        options: ["🏔️ Österreich - Schweiz", "🚗 Österreich - Deutschland", "🍝 Österreich - Italien"],
        correctIndex: 0,
        correctMsg: "Richtig! 🏔️🎉",
        wrongMsg: "Leider falsch 😄 Es war die Grenze zur Schweiz 🏔️"
    },
    {
        type: "mc",
        img: "img/Kostuem.jpg",
        solutionImg: "img/Kostuem_Antwort.jpg",
        q: "Was hatte Fynn hier für ein Kostüm an? 🎭",
        options: ["⚔️ Jedi", "🕷️ Spiderman", "🤡 Clown"],
        correctIndex: 2,
        correctMsg: "Stimmt! Passt irgendwie perfekt. 🤡🎉",
        wrongMsg: "Fast 😄 Es war der Clown, passt irgendwie perfekt. 🤡"
    },
    {
        type: "mc",
        img: "img/GranCanaria.jpg",
        solutionImg: "img/GranCanaria_Antwort.jpg",
        q: "Wo war ich 2023 mit Tjark im Urlaub? 🌞",
        options: ["🏝️ Gran Canaria", "🌋 Teneriffa", "🌊 Fuerteventura"],
        correctIndex: 0,
        correctMsg: "Stimmt! 🌞🏝️",
        wrongMsg: "Fast 😄 Es war Gran Canaria. 🌞"
    },
    {
        type: "text", 
        img: "img/Italien.jpg",
        solutionImg: "img/Italien_Antwort.jpg",
        q: "In welcher Stadt waren wir da? (Land geht auch)? 🎭",
        answer: "Venedig",
        aliases: ["Italien", "italien", "venedig"],
        correctMsg: "Yes! Venedig 🎭 Sehr gut!",
        wrongMsg: "Leider nein 😄 Richtig wäre: Venedig (Italien zählt auch 😉)."
    },
    {
        type: "mc",
        img: "img/Premierenball.jpg",
        solutionImg: "img/Premierenball_Antwort.jpg",
        q: "Wann war das? 💃🕺",
        options: ["📅 2017", "📅 2018", "📅 2019"],
        correctIndex: 0,
        correctMsg: "Stimmt! Das war 2017 auf meinem Premierenball. 💃🕺",
        wrongMsg: "Nope 😄 Es war schon 2017. Verrückt, wie lange das her ist."
    },
    {
        type: "text",
        img: "img/Sofie.jpg",
        solutionImg: "img/Sofie_Antwort.jpg",
        q: "Wie hieß meine Grundschulfreundin? 👩🏽‍🤝‍👩🏼",
        answer: "Sofie",
        aliases: ["sofie"],
        correctMsg: "Stimmt! 🎉",
        wrongMsg: "Fast 😄 Sofie hieß sie."
    },
];

const photo = document.getElementById("photo");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const checkTextBtn = document.getElementById("checkTextBtn");

const qIndexEl = document.getElementById("qIndex");
const qTotalEl = document.getElementById("qTotal");
const scoreEl = document.getElementById("score");

const inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.id = "textAnswer";
inputEl.placeholder = "Antwort eintippen…";

let idx = 0;
let score = 0;
let answered = false;
let showingSolution = false;

qTotalEl.textContent = String(QUESTIONS.length);

// ===== Helpers =====
function norm(s) {
  return String(s ?? "").trim().toLowerCase();
}

function setNextLabel() {
  nextBtn.textContent = (idx === QUESTIONS.length - 1) ? "Ergebnis anzeigen" : "Nächste Frage";
}

function renderQuestion() {
    const item = QUESTIONS[idx]; // aktuelle Frage aus der Liste.

    answered = false; 
    showingSolution = false;

    feedbackEl.textContent = ""; // Feedback leer
    nextBtn.disabled = true; // „Weiter“ erstmal deaktiviert
    restartBtn.classList.add("hidden"); // Neustart-Button verstecken

    // Button wieder freischalten
    checkTextBtn.disabled = false;
    checkTextBtn.classList.add("hidden");

    qIndexEl.textContent = String(idx + 1);
    scoreEl.textContent = String(score);

    // Bild und Frage setzen
    photo.src = item.img;
    questionEl.textContent = item.q;

    answersEl.innerHTML = "";

    // Standard: Text-Button verstecken
    checkTextBtn.classList.add("hidden");

    // Wenn type = mc -> Antworten-Buttons erzeugen
    if (item.type === "mc") {
        item.options.forEach((text, i) => {
        const btn = document.createElement("button");
        btn.className = "answer";
        btn.type = "button";
        btn.textContent = text;
        btn.addEventListener("click", () => chooseMC(i, btn));
        answersEl.appendChild(btn);
        });

    // Wenn type = text -> Input erzeugen
    } else if (item.type === "text") {
        inputEl.value = "";
        answersEl.appendChild(inputEl);
        checkTextBtn.classList.remove("hidden");
        // Komfort: Cursor direkt ins Feld
        setTimeout(() => inputEl.focus(), 0);
    }
}

// ===== MC =====
function chooseMC(i, clickedBtn) {
    if (answered) return;
    answered = true;

    const item = QUESTIONS[idx];
    const buttons = [...answersEl.querySelectorAll(".answer")];
    buttons.forEach(b => b.disabled = true);

    // Richtige Antwort markieren
    const correctBtn = buttons[item.correctIndex];
    correctBtn.classList.add("correct");

    // Punkte + Feedback
    // bei richtiger Antwort:
    if (i === item.correctIndex) {
        score++;
        scoreEl.textContent = String(score);
        feedbackEl.textContent = item.correctMsg ?? "Richtig!"; // Fallback: Richtig!

    // bei falscher Antwort:  
    } else {
        clickedBtn.classList.add("wrong");
        feedbackEl.textContent = item.wrongMsg ?? "Leider falsch.";
    }

    photo.src = item.solutionImg;
    showingSolution = true;

    nextBtn.disabled = false;
    setNextLabel();
}

// ===== TEXT =====
function checkTextAnswer() {
  if (answered) return;
  answered = true;

  const item = QUESTIONS[idx];

  const user = norm(inputEl.value);
  const correct = norm(item.answer);

  // aliases normalisieren
  const aliases = (item.aliases ?? []).map(norm);

  const isCorrect = (user !== "" && (user === correct || aliases.includes(user)));

  if (isCorrect) {
    score++;
    scoreEl.textContent = String(score);
    feedbackEl.textContent = item.correctMsg ?? "Richtig!";
  } else {
    feedbackEl.textContent = item.wrongMsg ?? "Leider falsch.";
  }

  photo.src = item.solutionImg;
  showingSolution = true;

  nextBtn.disabled = false;
  setNextLabel();

  //nur einmal prüfen erlauben
  checkTextBtn.disabled = true;
}

// Button für Textfragen
checkTextBtn.addEventListener("click", () => {
  if (answered) return;
  checkTextAnswer();
});

// Enter im Input prüft auch
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (!answered) checkTextAnswer();
  }
});

// Ergebnisbildschirm
function showResult() {
    // Ergebnis-Screen als letzte "Frage"
    photo.src = "img/Ergebnis.jpg"; // Nimmt das Bild der letzten Frage als Ergebnisbild
    questionEl.textContent = "Alles Gute zum Geburtstag! 🎂\n\n" + `Du hast ${score} / ${QUESTIONS.length} Punkte erreicht.`;
    answersEl.innerHTML = "";

    if (score === QUESTIONS.length) msg = "Perfekt! 🎉🎉🎉 \n\n" + "Hast dir ja doch ein, zwei Sachen gemerkt. 😄❤️ \n\n" + "Und jetzt gibt’s Kuchen. 🎂";
    else if (score >= Math.ceil(QUESTIONS.length * 0.7)) msg = "Solide! 🎉 \n\n" + "Und jetzt gibt’s Kuchen. 🎂❤️";
    else if (score >= 1) msg = "Okay, nicht alles gewusst – aber die wichtigen Dinge schon ❤️ \n\n" + "Und jetzt gibt’s Kuchen. 🎂";
    feedbackEl.textContent = msg;

    nextBtn.disabled = true; // Weiter deaktivieren
    nextBtn.classList.add("hidden"); // weiter verstecken
    restartBtn.classList.remove("hidden"); // Neustart zeigen
    checkTextBtn.classList.add("hidden");
} 

// Gehe zur nächsten Frage, wenn es keine mehr gibt, zeige das Ergebnis.
function goNext() {
    if (idx === QUESTIONS.length - 1) {
        showResult();
        return;
    }
    else {
        idx++;
        renderQuestion(); // neue Frage anzeigen
    }
}
// Weiter/Nächste Frage
nextBtn.addEventListener("click", () => {
    if (!answered) return;
    if (!showingSolution) return;
    goNext();
});

// Neustart
restartBtn.addEventListener("click", () => {
  idx = 0;
  score = 0;
  nextBtn.classList.remove("hidden");
  renderQuestion();
});

// Start
renderQuestion();