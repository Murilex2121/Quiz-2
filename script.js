const scenes = [
  {
    text: "Você acorda em um mundo futurista. Seu primeiro desafio é escolher uma profissão:",
    choices: [
      { text: "Engenheiro de IA", points: 10, explanation: "Tecnologia é o futuro, e você está na frente!" },
      { text: "Explorador Espacial", points: 5, explanation: "Corajoso, mas arriscado!" },
      { text: "Ficar em casa", points: 0, explanation: "Você perdeu oportunidades valiosas." }
    ]
  },
  {
    text: "Você recebe uma proposta de trabalho em uma grande corporação.",
    choices: [
      { text: "Aceitar", points: 10, explanation: "Boa escolha! Segurança e benefícios." },
      { text: "Negociar salário", points: 15, explanation: "Excelente! Você mostrou atitude!" },
      { text: "Recusar", points: 0, explanation: "Pode ter perdido uma boa chance." }
    ]
  },
  {
    text: "Um vírus ameaça o sistema da cidade. O que você faz?",
    choices: [
      { text: "Cria uma solução de cibersegurança", points: 15, explanation: "Você salvou milhões!" },
      { text: "Ignora", points: -5, explanation: "Foi irresponsável..." },
      { text: "Foge da cidade", points: 0, explanation: "Evitar o problema não o resolve." }
    ]
  },
  {
    text: "Você é chamado para liderar um time internacional.",
    choices: [
      { text: "Aceitar e unir o time", points: 20, explanation: "Liderança é seu ponto forte!" },
      { text: "Recusar por insegurança", points: 0, explanation: "Talvez você perca o timing." },
      { text: "Indicar outra pessoa", points: 5, explanation: "Generoso, mas perdeu protagonismo." }
    ]
  }
];

let currentScene = 0;
let score = 0;

const sceneText = document.getElementById("scene-text");
const choicesBox = document.getElementById("choices");
const explanationBox = document.getElementById("explanation");
const scoreBox = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

startBtn.onclick = () => startGame();
restartBtn.onclick = () => startGame();

function startGame() {
  currentScene = 0;
  score = 0;
  startBtn.style.display = "none";
  restartBtn.style.display = "none";
  explanationBox.textContent = "";
  updateScene();
}

function updateScene() {
  if (currentScene >= scenes.length) {
    sceneText.textContent = `Fim da Jornada! Sua pontuação final: ${score} pontos.`;
    choicesBox.innerHTML = "";
    explanationBox.textContent = "";
    restartBtn.style.display = "block";
    return;
  }

  const scene = scenes[currentScene];
  sceneText.textContent = scene.text;
  choicesBox.innerHTML = "";
  explanationBox.textContent = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      score += choice.points;
      scoreBox.textContent = `Pontuação: ${score}`;
      explanationBox.textContent = choice.explanation;
      currentScene++;
      updateProgress();
      setTimeout(updateScene, 1500);
    };
    choicesBox.appendChild(btn);
  });
}

function updateProgress() {
  const progress = ((currentScene) / scenes.length) * 100;
  progressBar.style.width = `${progress}%`;
}