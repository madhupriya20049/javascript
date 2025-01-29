// let obj={
//     name:'Madhu',
//     id:'123',
//     designation:'hyd'
// }
// console.log(obj);

// let obj2=JSON.stringify(obj);
// console.log(obj2);

// let obj1=JSON.parse(obj2);
// console.log(obj1);
window.fetch("data.json")
.then((data)=>data.json())
.then((res)=>{
    res.map((x)=>{
        console.log(x);
        console.log(x.name);
        console.log(x.id);
        console.log(x.Designation);
        document.body.innerHTML += `<h1>${x.name}</h1>`
        document.body.innerHTML += `<h1>${x.id}</h1>`
        document.body.innerHTML += `<h1>${x.Designation}</h1>`
    })
})

