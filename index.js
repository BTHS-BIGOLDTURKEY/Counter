//school counter
let count = 0;
let clicks = 0;
document.getElementById("count-el").innerText = count
function increment(){
    count++
    clicks++
    document.getElementById("count-el").innerText = count
    console.log(clicks)
}