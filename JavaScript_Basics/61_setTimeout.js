// setTimeout() = inovkes a function after a number of milliseconds
//                asynchronous function (doesn't pause execution)

function firstMessage(item, price) {
    alert(`Buy this ${item} for $${price}`);
}
function secondMessage() {
    alert(`This is not a scam!`);
}
function thirdMessage() {
    alert(`DO ITT!!`);
}
let item = "cryptocurrency";
let price = 450.35;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 10000);
let timer3 = setTimeout(thirdMessage, 15000);

document.getElementById("myButton").onclick = function () {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying`);
}