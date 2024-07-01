// const contain = document.createElement("div");
// contain.innerHTML = "Hello World you're great!!";
// document.body.appendChild(contain);

// const nodeList = document.getElementById("crap");
// let count = nodeList.childNodes.length;
// document.getElementById("list").innerHTML = count;

// const btn = document.createElement("button");
// btn.innerHTML = "How can I place this?";
// document.body.appendChild(btn);

// document.querySelector(".click").addEventListener("click", () => {
//   document.querySelector(".change").classList.toggle("new-color"),
//     (document.querySelector(".change").innerHTML = "thanks for all the fish");
// });

// const button = document.querySelector("button.change");
// const textField = document.querySelector(".changing-text");
// const body = document.querySelector("body");

// button.addEventListener("click", () => {
//   body.classList.toggle("accessible-styles");
//   const isAccessible = body.classList.contains("accessible-styles");
//   if (isAccessible) {
//     textField.textContent = "Accessible Styles!";
//   } else {
//     textField.textContent = "Base Styles!";
//   }
// });

let items = [];
function addItem() {
  newArray = document.getElementById('userInput').value;
  document.getElementById("userInput").value = "";
  items.push(newArray);
  console.log(items);
  return false;
}

// function getText() {
// let text = document.getElementById("userInput").value;
// document.getElementById("textTarget").innerHTML += `<h2 class="dynamic" onclick='this.style.display="none"'>${text}</h2>`;
// document.getElementById("userInput").value = "";
// const itemCount = document.getElementById("textTarget");
// let count = itemCount.childNodes.length;
// document.getElementById("counter").innerHTML = count++;
// console.log(text);
// }



