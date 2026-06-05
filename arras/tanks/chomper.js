document.addEventListener("DOMContentLoaded", (event)=>{
    var closedButton = document.getElementById("closed")
    var openButton = document.getElementById("open")
    var image = document.getElementById("image")
    closedButton.addEventListener("click", switchToClosed)
    openButton.addEventListener("click", switchToOpen)
    function switchToClosed(){
        if (openButton.classList.contains("selected")){
            openButton.classList.remove("selected")
        }
        closedButton.classList.add("selected")
        image.src = "../assets/Chomper (Closed).png"
    }
    function switchToOpen(){
        if (closedButton.classList.contains("selected")){
            closedButton.classList.remove("selected")
        }
        openButton.classList.add("selected")
        image.src = "../assets/Chomper (Open).png"
    }
})