const circleText = document.querySelector(".circle-text h4");
circleText.innerHTML = circleText.innerHTML.split("").map(
    (char, i) => `<span style="transform:rotate(${i * 14.5}deg)">${char}</span>`
).join("");