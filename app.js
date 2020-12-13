const p1Display = document.querySelector("#player-1-score");
const p2Display = document.querySelector("#player-2-score");
const p1Button = document.querySelector("#increment-1");
const p2Button = document.querySelector("#increment-2");
const resetButton = document.querySelector("#reset");
const scoreLimitInput = document.querySelector("#score-limit");
scoreLimitInput.defaultValue = 5;

let scoreLimit = parseInt(scoreLimitInput.value);
scoreLimitInput.addEventListener("change", () => {
    scoreLimit = parseInt(scoreLimitInput.value);
    reset();
});

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

p1Button.addEventListener("click", () => {
    if (p1Score !== scoreLimit && !isGameOver) {
        p1Score++;
        p1Display.innerText = p1Score;
    }
    if (p1Score === scoreLimit) {
        isGameOver = true;
        p1Display.classList.add("winner");
        p2Display.classList.add("loser");
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
});

p2Button.addEventListener("click", () => {
    if (p2Score !== scoreLimit && !isGameOver) {
        p2Score++;
        p2Display.innerText = p2Score;
    }
    if (p2Score === scoreLimit) {
        isGameOver = true;
        p2Display.classList.add("winner");
        p1Display.classList.add("loser");
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
});

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = p1Score;
    p2Display.innerText = p2Score;
    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("winner", "loser");
    p1Button.disabled = false;
    p2Button.disabled = false;
}



