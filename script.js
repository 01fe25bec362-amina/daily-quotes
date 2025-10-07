const quotes = [
  "Believe in yourself!",
  "Every day is a new chance.",
  "Stay positive and happy."
];

function newQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[index];
}