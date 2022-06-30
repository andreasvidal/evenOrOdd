import {evenOrOdd} from "./evenOrOdd.js"
const d = document

const number = d.querySelector("#your-number");
const output = d.querySelector("#output");

number.addEventListener("keyup", () => {
    output.textContent = evenOrOdd(Number.parseInt(number.value, 10));
});
