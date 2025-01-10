function main(task){
    console.log(task(10,10));
}
main(function(a,b){
    return a+b;
})
main(function(a,b){
    return a-b;
})
main(function(a,b){
    return a*b;
})