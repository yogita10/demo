function changeDets(){
    c++;
console.log(c);
if(c%2==0){
    document.getElementById("time").textContent=4;
    document.getElementById("day").textContent="Friday";
    document.getElementById("date").textContent=22;
    document.querySelector("sup").textContent="nd";
    document.querySelector("a").setAttribute("href","https://taarangana.com/");
}else{
    document.getElementById("time").textContent=8;
    document.getElementById("day").textContent="Sunday";
    document.getElementById("date").textContent=24;
    document.querySelector("sup").textContent="th";
}
}
    
let c=0;
document.querySelectorAll(".content__nav-button").forEach((button) => 
{
    console.log("hey?")
    button.addEventListener("click",changeDets)
});