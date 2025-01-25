console.log(window);
console.log(window.document);
console.log(document.head);
console.log(typeof document);
console.log(document.doctype);//directly targetting using document called direct access method
console.log(document.body);
console.log(document.title);
document.title="New page"

let link=document.links;
console.log(link);

for(let i=0;i<link.length;i++){
    console.log(link[i]);
    link[i].className="demo";
    link[i].href="http://www.youtube.com:";
    link[i].target="_blank";
    
    
}

let a=document.getElementById("demo");
console.log(a);
console.log(a.textContent);
a.textContent="WELCOME TO NEW CLASS";
console.log(a.textContent);
a.style.backgroundColor="green";
a.style.textAlign="center";
a.style.color="white";

let c=document.getElementsByClassName("demo1");
console.log(c);
console.log(c[0]);
console.log(c[0].textContent);
console.log(c[1].textContent);
c[0].style.backgroundColor="blue";
c[0].style.color="white";
c[0].style.textAlign="center";
c[1].style.backgroundColor="orange";
c[1].style.textAlign="center";

let c1=document.getElementsByTagName("p")
console.log(c1);
c1[1].style.color="red"
c1[1].textContent="Hello"
c1[0].style.color="brown"
c1[0].style.background="orange"

let d=document.getElementsByName("demo2")
console.log(d);
d[1].style.backgroundColor="crimson"
d[0].style.color="crimson"
d[0].style.backgroundColor="pink"
d[1].style.fontSize="30px"
d[1].style.textAlign="center"

let f=document.querySelectorAll("#demo")//all the elements will be printed using node-list
console.log(f);

let e=document.querySelector(".demo1")//only first element will be printed
console.log(e);
console.log(e[1]);
let e1=document.querySelectorAll(".demo1")
console.log(e1);




