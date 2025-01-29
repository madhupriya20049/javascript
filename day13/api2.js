let demo=async () => {
 let data =await window.fetch("country.json")
 console.log(data);
 let res=await data.json()
 console.log(res);
 res.map((x)=>{
    console.log(x);
    console.log(x.country);
    let select=document.getElementById("select")
    console.log(select);
    select.innerHTML +=`<option value=${x.country}>${x.country}</option>`
    let demo1=document.getElementById("demo1")
    console.log(demo1);
    demo1.innerHTML +=`<option value=${x.country}>${x.country}</option>`
 })
}
demo()