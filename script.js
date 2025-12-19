
// Fragenkatalog:
// correctIndex: 0,1,2 entspricht Antwort A,B,C
const QUESTIONS = [
    {
        img: "img/Charly.jpg",
        solutionImg: "img/Charly_Antwort.jpg",
        q: "Wann war das?",
        options: ["2016", "2017", "2018"],
        correctIndex: 2,
        correctMsg: "Yes!.", // Text bei richtiger Antwort
        wrongMsg: "Knapp daneben." //  Text bei falscher Antwort
    },
    {
        img: "img/1000_Tage.jpg",
        solutionImg: "img/1000_Tage_Antwort.jpg",
        q: "Was steht auf dem Schild?",
        options: ["Emily 500 Tage", "Emily 1000 Tage", "Emily 2000 Tage"],
        correctIndex: 1,
        correctMsg: "Richtig!",
        wrongMsg: "Nope..."
    },
    {
        img: "img/Kleid.jpg",
        solutionImg: "img/Kleid_Antwort.jpg",
        q: "Welche Farbe hatte mein Abiblall-Kleid?",
        options: ["rosa", "rot", "blau"],
        correctIndex: 1,
        correctMsg: "Stimmt!",
        wrongMsg: "Fast – es war rot."
    },
    {
        img: "img/Kostuem.jpg",
        solutionImg: "img/Kostuem_Antwort.jpg",
        q: "Was hatte Fynn hier für ein Kostüm an?",
        options: ["Jedi", "Spiderman", "Clown"],
        correctIndex: 2,
        correctMsg: "Stimmt!",
        wrongMsg: "Fast – es war der Clown."
    },
    {
        img: "img/Kroatien.jpg",
        solutionImg: "img/Kroatien_Antwort.jpg",
        q: "Wo war das?",
        options: ["Italien", "Kroatien", "Spanien"],
        correctIndex: 1,
        correctMsg: "Stimmt! 2013 in Kroatien",
        wrongMsg: "Falsch."
    },
    {
        img: "img/Grenze.jpg",
        solutionImg: "img/Grenze_Antwort.jpg",
        q: "An welcher Grenze stehen wir hier?",
        options: ["Österreich - Schweiz", "Österreich - Deutschland", "Österreich - Italien"],
        correctIndex: 0,
        correctMsg: "Stimmt!",
        wrongMsg: "Falsch."
    },
    {
        img: "img/Einschulung.jpg",
        solutionImg: "img/Einschulung_Antwort.jpg",
        q: "Wann war das?",
        options: ["2012", "2013", "2014"],
        correctIndex: 2,
        correctMsg: "Stimmt!",
        wrongMsg: "Falsch."
    },
    {
        img: "img/GranCanaria.jpg",
        solutionImg: "img/GranCanaria_Antwort.jpg",
        q: "Wo waren wir 2023 im Urlaub?",
        options: ["Gran Canaria", "Teneriffa", "Fuerteventura"],
        correctIndex: 0,
        correctMsg: "Stimmt!",
        wrongMsg: "Falsch."
    },
    {
        img: "img/Italien.jpg",
        solutionImg: "img/Italien_Antwort.jpg",
        q: "Wo war das?",
        options: ["Italien", "Kroatien", "Spanien"],
        correctIndex: 0,
        correctMsg: "Stimmt!",
        wrongMsg: "Falsch."
    },
    {
        img: "img/Premierenball.jpg",
        solutionImg: "img/Premierenball_Antwort.jpg",
        q: "Wann war das?",
        options: ["2017", "2018", "2019"],
        correctIndex: 0,
        correctMsg: "Stimmt!",
        wrongMsg: "Falsch."
    },
    {
        img: "img/Sofie.jpg",
        solutionImg: "img/Sofie_Antwort.jpg",
        q: "Wie hieß meine Grundschulfreundin?",
        options: ["Helene", "Sofie", "Lara"],
        correctIndex: 1,
        correctMsg: "Stimmt!",
        wrongMsg: "Falsch."
    },
];

const photo = document.getElementById("photo");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const qIndexEl = document.getElementById("qIndex");
const qTotalEl = document.getElementById("qTotal");
const scoreEl = document.getElementById("score");

let idx = 0;
let score = 0;
let answered = false;
let showingSolution = false;

qTotalEl.textContent = String(QUESTIONS.length);

function renderQuestion() {
    const item = QUESTIONS[idx]; // aktuelle Frage aus der Liste.
    answered = false; 
    showingSolution = false;
    feedbackEl.textContent = ""; // Feedback leer
    nextBtn.disabled = true; // „Weiter“ erstmal deaktiviert
    restartBtn.classList.add("hidden"); // Neustart-Button verstecken

    qIndexEl.textContent = String(idx + 1);
    scoreEl.textContent = String(score);

    // Bild und Frage setzen
    photo.src = item.img;
    questionEl.textContent = item.q;

    // Antworten-Buttons erzeugen
    answersEl.innerHTML = "";
    item.options.forEach((text, i) => {
        const btn = document.createElement("button");
        btn.className = "answer";
        btn.type = "button";
        btn.textContent = text;
        btn.addEventListener("click", () => choose(i, btn));
        answersEl.appendChild(btn);
    });
}

// Klick auswerten
function choose(i, clickedBtn) {
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

    nextBtn.disabled = false; // Weiter-Button ist aktiv

    if (idx === QUESTIONS.length -1) {
        nextBtn.textContent = "Ergebnis anzeigen";
    }
    else {
        nextBtn.textContent = "Nächste Frage";
    }
}

// Ergebnisbildschirm
function showResult() {
    // Ergebnis-Screen als letzte "Frage"
    photo.src = QUESTIONS[Math.max(0, QUESTIONS.length - 1)].img; // Nimmt das Bild der letzten Frage als Ergebnisbild
    questionEl.textContent = `Fertig! Punkte: ${score} / ${QUESTIONS.length}`;
    answersEl.innerHTML = "";

    let msg = "Alles Gute! ❤️";
    if (score === QUESTIONS.length) msg = "Perfekt! Du kennst dich selbst am besten 😄❤️";
    else if (score >= Math.ceil(QUESTIONS.length * 0.7)) msg = "Sehr stark! ❤️";
    else if (score >= 1) msg = "Solide! (Und jetzt gibt’s Kuchen.) 🎂";
    feedbackEl.textContent = msg;

    nextBtn.disabled = true; // Weiter deaktivieren
    nextBtn.classList.add("hidden"); // weiter verstecken
    restartBtn.classList.remove("hidden"); // Neustart zeigen
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
// Weiter
nextBtn.addEventListener("click", () => {
    const item = QUESTIONS[idx];
    if (!answered) return; // Wenn noch nicht beantwortet → nichts tun
    else if (!showingSolution) return; // Wenn noch nicht Lösungsbild gezeigt -> nichts tun
    else {
        goNext();
    }
});

// Neustart
restartBtn.addEventListener("click", () => {
    idx = 0;
    score = 0;
    nextBtn.classList.remove("hidden"); // Weiter wieder anzeigen
    nextBtn.textContent = "Weiter";
    renderQuestion();
});

renderQuestion();
