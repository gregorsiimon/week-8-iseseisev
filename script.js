const button = document.querySelector("button")
const result = document.querySelector("#resultPrints")

button.addEventListener("click", () => {
    result.innerHTML = ""

    for(let i = 0; i < 10; i++) {
        let newLi = document.createElement("li")
        newLi.innerText = `${i + 1}. I am awesome!`
        result.appendChild(newLi)
    }
})