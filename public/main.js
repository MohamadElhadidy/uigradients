var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var main = document.getElementById("gradient");
var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var copied = document.getElementById("copied");
var button = document.querySelector("button");


function changeGradient() {
  main.style.background = `linear-gradient(to left top, ${color1.value}, ${color2.value} )`;

  value1.textContent = color1.value;
  value2.textContent = color2.value;
  copied.textContent = "";
}

function copyGradient() {
   let background = `linear-gradient(to left top, ${color1.value}, ${color2.value} )`;
   navigator.clipboard.writeText(background);
   copied.textContent = "Copied";
}


color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);


button.addEventListener("click", copyGradient);
