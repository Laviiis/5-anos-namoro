// NAVEGAÇÃO ENTRE PÁGINAS
const buttons = document.querySelectorAll(".next");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const current = btn.closest(".page");
    const nextId = btn.dataset.next;
    const next = document.getElementById(nextId);

    current.classList.remove("active");
    next.classList.add("active");

    // 🔧 GARANTE QUE A NOVA PÁGINA COMECE DO TOPO
    next.scrollTo({ top: 0, behavior: "smooth" });

    if (nextId === "page-3") animateList();
    if (nextId === "page-4") startCounter();
  });
});

// ANIMAÇÃO DA LISTA
function animateList() {
  document.querySelectorAll(".love-list li").forEach((li, index) => {
    li.style.setProperty("--i", index);
  });
}

// CONTADOR FINAL
const years = [
  "1 ano juntos", "2 anos juntos", "5 anos juntos", "10 anos juntos", "20 anos juntos", "50 anos juntos",
  "100 anos juntos", "500 anos juntos", "1.000 anos juntos", "10.000 anos juntos", "100.000 anos juntos",
  "1 milhão de anos juntos", "10 milhões de anos juntos", "100 milhões de anos juntos",
  "1 bilhão de anos juntos"
];

let counterIndex = 0;

function startCounter() {
  const counter = document.getElementById("counter");
  const message = document.getElementById("final-message");

  counterIndex = 0;
  counter.textContent = years[0];

  const interval = setInterval(() => {
    counterIndex++;
    counter.textContent = years[counterIndex];

    if (counterIndex === years.length - 1) {
      clearInterval(interval);
      setTimeout(() => revealMessage(message), 2000);
    }
  }, 300);
}

function revealMessage(container) {
  container.style.opacity = 1;
  const lines = container.querySelectorAll("p, h3");

  lines.forEach((line, index) => {
    line.style.animationDelay = `${index * 1.2}s`;
  });
}