//school counter
let count = 0;
let clicks = 0;
let entries = []
entrTxt = ""
document.getElementById("count-el").innerText = count
function increment(){
    count++
    clicks++
    document.getElementById("count-el").innerText = count
    console.log(clicks)
}
function save(){
    entries.push(count)
    entrTxt += count+" - "
    document.getElementById("prev").innerText = entrTxt
}