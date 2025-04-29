document.querySelector("#h").addEventListener("click",ho)
        document.querySelector("#x").addEventListener("click",xx)
        document.querySelector("#k").addEventListener("click",kk)
        function kk(){
            document.querySelector("#kredit").style.display="block"
            document.querySelector("#x").style.display="block"
            document.querySelector("#h").removeEventListener("click",ho)
            document.querySelector("#k").removeEventListener("click",kk)
            document.querySelectorAll("a")[0].style.display="none"
        }
        function ho() {
            document.querySelector("#d").style.display="block"
            document.querySelector("#x").style.display="block"
            document.querySelector("#h").removeEventListener("click",ho)
            document.querySelector("#k").removeEventListener("click",kk)
            document.querySelectorAll("a")[0].style.display="none"
        }
        function xx() {
            document.querySelector("#d").style.display="none"
            document.querySelector("#kredit").style.display="none"
            document.querySelector("#x").style.display="none"
            document.querySelector("#h").addEventListener("click",ho)
            document.querySelector("#x").addEventListener("click",xx)
            document.querySelector("#k").addEventListener("click",kk)
            document.querySelectorAll("a")[0].style.display="block"
        }