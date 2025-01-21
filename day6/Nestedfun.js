//nested function
// function parent(){
//     function child(){
//         console.log("I am child function")
//     }child()
// }parent()

// var a=10;
// let b=20;
// function parent1(){
//     var a="hi";
//     let b="hello";
//     console.log(a);
//     console.log(b);
//     console.log(this.a);
//     console.log(this.b);

// }parent1()

//lexical-scope
// function main(){
//     let a=10;
//     function child(){
//        console.log(a);
//     }child()
// }
// main()

//closure
function parent(){
    
    function child1(){
       console.log("i am child 1");
       function child3(){
        console.log("I am child 3");
       }return child3
    }
    function child2(){
        console.log("this is child 2")
    }return [child1,child2]
}
parent()[0]()()
parent()[1]()







