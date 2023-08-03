fetch("https://api.adviceslip.com/advice")
    .then(r => r.json())
    .then(data => {
        let adviceId = document.querySelector(".advice-id"),
            advice = document.querySelector(".advice");

        adviceId.textContent = `Advice #${data.slip.id}`;
        advice.textContent = `"${data.slip.advice}"`;
    })
    .catch(r => console.error("Can't fetch advice: " + r));

let dice = document.querySelector(".dice");

dice.onclick = function() {
    location.reload();
}