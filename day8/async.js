// window.setTimeout(()=>{
//     console.log("I am setTimeOut");
// },4000);

// window.setInterval(()=>{
//     console.log("I am SetInterval");
// },2000);

// function main(m,n){
//    setTimeout(()=>{
//     for(let i=m;i<=n;i++){
//         console.log(i);
//     }
// },4000)
// }
// main(1,"9a")

// function main2(){
    
//         console.log("hi");
    
// }
// main2()

let online=window.navigator.onLine;

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(online === true){
            return resolve()
        }else{
            return reject()
        }
    },3000)
})
.then(() =>console.log("online..."))
.catch(() => console.log("ofline.."))