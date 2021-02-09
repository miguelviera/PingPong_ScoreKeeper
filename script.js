const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");
const scoreOne = document.querySelector("#scoreOne");
const scoreTwo = document.querySelector("#scoreTwo");
const reset = document.querySelector("#reset");
const selectPoints = document.querySelector("#points");

let addOne = 0;
let addTwo = 0;

playerOne.addEventListener("click", function (e) {
    e.preventDefault()
    addOne++;
    scoreOne.innerText = addOne;
    if (scoreOne.innerText === selectPoints.value) {
        scoreOne.style.color = "green";
        scoreTwo.style.color = "red";
        playerOne.disabled = true;
        playerTwo.disabled = true;
        setTimeout(function () { alert("Player One Won"); }, 100);
    }
})

playerTwo.addEventListener("click", function (e) {
    e.preventDefault()
    addTwo++;
    scoreTwo.innerText = addTwo;
    if (scoreTwo.innerText === selectPoints.value) {
        scoreTwo.style.color = "green";
        scoreOne.style.color = "red";
        playerOne.disabled = true;
        playerTwo.disabled = true;
        setTimeout(function () { alert("Player Two Won"); }, 100);
    }
})

reset.addEventListener("click", resetScore);

selectPoints.addEventListener("change", resetScore);

function resetScore() {
    addOne = 0;
    addTwo = 0;
    scoreOne.innerText = 0;
    scoreTwo.innerText = 0;
    scoreTwo.style.color = "black";
    scoreOne.style.color = "black";
    playerOne.disabled = false;
    playerTwo.disabled = false;
}


