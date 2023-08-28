const quotes = [
    "El conocimiento es poder.",
    "La creatividad es la inteligencia divirtiéndose.",
    "Nada es particularmente difícil si lo divides en pequeños trabajos.",
    "No hay atajos para cualquier lugar que valga la pena ir.",
    "La mejor manera de predecir el futuro es crearlo."
  ];
  
  const quoteElement = document.getElementById("quote");
  const inputElement = document.getElementById("input");
  const startButton = document.getElementById("startBtn");
  const resultElement = document.getElementById("result");
  
  let currentQuoteIndex = 0;
  let startTime;
  
  function startGame() {
    startButton.disabled = true;
    inputElement.value = "";
    resultElement.textContent = "";
  
    quoteElement.textContent = quotes[currentQuoteIndex];
    inputElement.focus();
  
    startTime = new Date();
  }
  
  function endGame() {
    const endTime = new Date();
    const elapsedTime = (endTime - startTime) / 1000;
    const typedText = inputElement.value;
    const quote = quotes[currentQuoteIndex];
  
    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
      if (typedText[i] === quote[i]) {
        correctChars++;
      }
    }
  
    const accuracy = (correctChars / quote.length) * 100;
    const wpm = (typedText.length / 5) / (elapsedTime / 60);
  
    resultElement.textContent = `Velocidad: ${wpm.toFixed(2)} palabras por minuto | Precisión: ${accuracy.toFixed(2)}%`;
  
    currentQuoteIndex++;
    if (currentQuoteIndex < quotes.length) {
      startButton.disabled = false;
    } else {
      quoteElement.textContent = "Juego Terminado";
      startButton.style.display = "none";
    }
  }
  
  startButton.addEventListener("click", startGame);
  inputElement.addEventListener("input", function() {
    if (inputElement.value === quotes[currentQuoteIndex]) {
      endGame();
    }
  });
  