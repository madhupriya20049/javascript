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

