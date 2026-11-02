
const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

surpriseBtn.addEventListener("click", async () => {

    surprise.classList.remove("hidden");

    surpriseBtn.innerHTML = "Surprise Opened 💖";

    celebrate();

    try {
        await music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } catch (error) {
        musicBtn.innerHTML = "🎵 Play Music";
    }

});

musicBtn.addEventListener("click", async () => {

    if (music.paused) {
        try {
            await music.play();
            musicBtn.innerHTML = "⏸ Pause Music";
        } catch (error) {
            alert("Please add song.mp3 to your repository!");
        }
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }

});

// Floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["💗","💕","❤️","🌸","✨"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 500);

// Celebration
function celebrate() {

    for (let i = 0; i < 80; i++) {

        const item = document.createElement("div");

        item.innerHTML = "✨";
        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-20px";
        item.style.fontSize = "20px";
        item.style.pointerEvents = "none";
        item.style.zIndex = "1000";

        document.body.appendChild(item);

        item.animate([
            { transform: "translateY(0) rotate(0deg)", opacity: 1 },
            { transform: `translateY(100vh) rotate(500deg)`, opacity: 0 }
        ], {
            duration: 2500 + Math.random() * 1500
        });

        setTimeout(() => item.remove(), 4500);
    }
}
