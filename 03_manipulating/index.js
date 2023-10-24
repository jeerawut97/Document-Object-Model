
document.querySelector("button").style.backgroundColor = "yellow";

var button_list = document.querySelector("button").classList;
button_list.add("invisible");
button_list.remove("invisible");
button_list.toggle("invisible");
button_list.toggle("invisible");

var h1 = document.querySelector("h1");
h1.classList.add("huge");
h1.innerHTML = "Good Bye";
console.log(h1.textContent);
h1.innerHTML = "<em>Good Bye</em>";

var a = document.querySelector("a");
console.log(a.getAttribute("href"));
a.setAttribute("href", "https://www.youtube.com");
console.log(a)