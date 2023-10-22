//Get Element By ID
var title = document.getElementById("title");
title.innerHTML = "Good Bye";
console.log(title);

//Query By #title
title = document.querySelector("#title");
console.log(title);
var li_a = document.querySelector("li a");
console.log(li_a);
var a = document.querySelector("a");
console.log(a);
var li_item = document.querySelector("li.item");
console.log(li_item);
var item = document.querySelector(".item");
console.log(item);
var list_a = document.querySelector("#list a");
console.log(list_a);
var list_item = document.querySelector("#list .item");
console.log(list_item);
document.querySelector("li").style.color = "red";



