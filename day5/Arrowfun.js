let main=(a,b,task)=>{
    console.log(task(a,b));
}
main(a=Number(prompt("Enter a for addition")),b=Number(prompt("Enter b for addition")),
(a,b)=>{
   return a+b; 
})
main(a=Number(prompt("Enter a for substraction")),b=Number(prompt("Enter b for substraction")),
(a,b)=>{
   return a-b; 
})
main(a=Number(prompt("Enter a for multiplication")),b=Number(prompt("Enter b for multiplication")),
(a,b)=>{
   return a*b; 
})
