document.addEventListener("DOMContentLoaded", (event)=>{
    var connectedButton = document.getElementById("connected")
    var disconnectedButton = document.getElementById("disconnected")
    var image = document.getElementById("image")
    connectedButton.addEventListener("click", switchToConnected)
    disconnectedButton.addEventListener("click", switchToDisconnected)
    function switchToConnected(){
        if (disconnectedButton.classList.contains("selected")){
            disconnectedButton.classList.remove("selected")
        }
        connectedButton.classList.add("selected")
        image.src = "../assets/Gantry Carriage.svg"
    }
    function switchToDisconnected(){
        if (connectedButton.classList.contains("selected")){
            connectedButton.classList.remove("selected")
        }
        disconnectedButton.classList.add("selected")
        image.src = "../assets/Gantry Carriage Form 2.svg"
    }
})