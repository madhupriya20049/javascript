(function(){
    console.log("hello");
})();

((a,b)=>{
    console.log(a+b)
})(10,10);

(function demo(){
    console.log("hi!");
})();

let a=(function(){
    console.log("hello");
})();

//Arrays in js
//declaration way
let arr=[10,"hello",1n,undefined,true]
console.log(arr);

//new keyword
let arr1=new Array(100,"hii",10n,undefined,false)
console.log(arr1);

//objcets in js
//declaration way
let obj1={
    num:100,
    boolean:true,
    undefined:undefined,
    name:"Madhu",
    arr:[10,20,30],
    fun:function(){
        console.log("Madhu");
    }
}
console.log(obj1);
console.log(obj1.boolean);
obj1.fun();
console.log(obj1.num);

//constructor function
function obj2(name,id){
   this.a1=name;
   this.a2=id; 
}
let nums=new obj2("maa",101);
console.log(nums);
console.log(nums.a1);
console.log(nums.a2);