// Arka plan müziği başlat
const bgMusic = new Audio('sounds/background.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;
bgMusic.play();

let score = 0;

function playSound(weight) {
  const audio = new Audio(`sounds/dumbell${weight}.mp3`);
  audio.play();

  // Puan artır
  score += weight;
  document.getElementById("score").innerText = score;
}
