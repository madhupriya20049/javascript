let main=function(){
    let num1=Number(prompt("Enter first value:"));
    let num2=Number(prompt("Enter second value:"));
    let num3=Number(prompt("Enter third value:"));
    let d=num1+num2+num3;
    console.log(d);
    let c=num1*num2*num3;
    console.log(c);
    let f=num1-num2-num3;
    console.log(f);

    if(num1>=num2 && num1>=num3){
        console.log(num1);
    }
    else if(num2>=num1 && num2>=num3){
        console.log(num2);
    }else{
        console.log(num3);
    }
}
console.log(main());
// let b=function(a){
// console.log(a);
// console.log(arguments);
// }
// b(10,20,30) ->to print all the values
// output: 10
// output: [Arguments] { '0': 10, '1': 20, '2': 30 }
 
