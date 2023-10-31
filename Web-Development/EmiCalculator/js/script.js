// Select elements
const loanAmount = document.getElementById("amt");
const loanTenure = document.getElementById("time");
const loanRate = document.getElementById("rate");
const out1 = document.querySelector(".val1");
const out2 = document.querySelector(".val2");
const loanEmi = document.querySelector(".emi");
const loanTotal = document.querySelector(".pay");
const loanInterest = document.querySelector(".inter");
const submitBtn = document.querySelector("#calc");

// Add input event listeners for loan tenure and amount
loanTenure.addEventListener("input", () => {
    let value = loanTenure.value;
    out2.textContent = value;
    out2.style.left = `${value / 2}%`;
    out2.classList.add("show");
});

loanTenure.addEventListener("blur", () => {
    out2.classList.remove("show");
});

loanAmount.addEventListener("input", () => {
    let value = loanAmount.value;
    out1.textContent = value;
    out1.style.left = `${value / 2}%`;
    out1.classList.add("show");
});

loanAmount.addEventListener("blur", () => {
    out1.classList.remove("show");
});

// Calculate and display loan details on submit
submitBtn.addEventListener("click", function () {
    const amount = parseFloat(loanAmount.value);
    const tenure = parseFloat(loanTenure.value);
    const rate = parseFloat(loanRate.value) / 100;
    const monthlyRate = rate / 12;
    const time = tenure / 12;

    const total = amount * Math.pow(1 + monthlyRate, time);
    const monthlyInterest = (total - amount) / time;
    const emi = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -time));
    const interest = emi * tenure - amount;

    loanEmi.textContent = Math.floor(emi);
    loanTotal.textContent = Math.floor(total);
    loanInterest.textContent = Math.floor(interest);
});
