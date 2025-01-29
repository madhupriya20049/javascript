let b= document.createElement("h1")
console.log(b);
b.textContent="New Page";
document.body.appendChild(b)
b.style.color="blue"

b.style.backgroundColor="pink"
let div=document.createElement("div")
console.log(div);
document.body.appendChild(div)

div.style.border="5px solid"
let ol=document.createElement("ol")
console.log(ol);
div.appendChild(ol)

let li1=document.createElement("li")
console.log(li1);
li1.textContent="react"

ol.appendChild(li1)
let li2=document.createElement("li")
console.log(li2);
li2.textContent="nodeJS"
ol.appendChild(li2)

let table=document.createElement("table")
console.log(table);
document.body.appendChild(table)
table.style.border="3px solid"
table.setAttribute("border","2px solid")

let tr1=document.createElement("tr")
console.log(tr1);
table.appendChild(tr1)

let tr2=document.createElement("tr")
console.log(tr2);
table.appendChild(tr2)

let td1=document.createElement("td")
console.log(td1);
tr1.appendChild(td1)
td1.textContent="hello"

let td2=document.createElement("td")
console.log(td2);
tr1.appendChild(td2)
td2.textContent="hello"

let td3=document.createElement("td")
console.log(td3);
tr1.appendChild(td3)
td3.textContent="hello"

let td4=document.createElement("td")
console.log(td4);
tr2.appendChild(td4)
td4.textContent="hello"


