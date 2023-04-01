let uservalue = document.getElementById("input");
let btn = document.getElementById("btn");

let showValue = document.getElementById("Value");

btn.onclick = function () {
  if (uservalue.value) {
    let data = ((uservalue.value - 32) * 5) / 9;
    showValue.innerHTML = data + "°C";
  } else {
    alert("Enter value");
  }
};
