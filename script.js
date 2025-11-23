// Grab Elements
const modal = document.getElementById('envelope-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');

function openEnvelope(cardElement) {
    // 1. Get data
    const title = cardElement.querySelector('h3').innerText;
    const message = cardElement.querySelector('.hidden-message').innerHTML;

    // 2. Populate modal
    modalTitle.innerText = title;
    modalMessage.innerHTML = message;

    // 3. Show modal
    modal.style.display = 'flex';
}

function closeEnvelope() {
    modal.style.display = 'none';
}

// Close if clicking outside the paper
window.onclick = function(event) {
    if (event.target == modal) {
        closeEnvelope();
    }
}

// Music Player
const playBtn = document.getElementById('play-btn');
const audio = document.getElementById('audio-source');
let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = "🎵 Play Our Song";
    } else {
        audio.play();
        playBtn.textContent = "⏸ Pause Music";
    }
    isPlaying = !isPlaying;
});