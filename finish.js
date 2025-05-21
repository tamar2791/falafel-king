document.querySelector("#ins").addEventListener("click",ho)
document.querySelector("#x").addEventListener("click",xx)
function ho() {
    document.querySelector("#ins_page").style.display="block"
    document.querySelector("#x").style.display="block"
    document.querySelector("#ins").removeEventListener("click",ho)
    document.querySelectorAll("a")[0].style.display="none"
}
function xx() {
    document.querySelector("#ins_page").style.display="none"
    document.querySelector("#x").style.display="none"
    document.querySelector("#ins").addEventListener("click",ho)
    document.querySelector("#x").addEventListener("click",xx)
    document.querySelectorAll("a")[0].style.display="block"
}
document.querySelector("#cea").innerHTML=localStorage.getItem("c");
document.querySelector("#nikud").innerHTML=localStorage.getItem("now");
