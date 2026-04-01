const count = document.querySelector(".count");
const input = document.querySelector("input");
const reset = document.querySelector(".reset")


input.addEventListener("keyup", () => {
    count.textContent = input.value.length;
})

reset.addEventListener("click", () => {
    input.value = "";
    count.textContent = 0;
})

