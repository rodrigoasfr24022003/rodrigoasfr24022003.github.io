document.addEventListener("DOMContentLoaded", (event)=>{
    var normalButton = document.getElementById("normal")
    var chargingButton = document.getElementById("charging")
    var image = document.getElementById("image")
    normalButton.addEventListener("click", switchToNormal)
    chargingButton.addEventListener("click", switchToCharging)
    function switchToNormal(){
        if (chargingButton.classList.contains("selected")){
            chargingButton.classList.remove("selected")
        }
        normalButton.classList.add("selected")
        image.src = "../assets/Stella.svg"
    }
    function switchToCharging(){
        if (normalButton.classList.contains("selected")){
            normalButton.classList.remove("selected")
        }
        chargingButton.classList.add("selected")
        image.src = "../assets/Stella (Charging).svg"
    }
})