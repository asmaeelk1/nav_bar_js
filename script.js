const sidebar = document.getElementsByClassName("navbar")
const toggle = document.getElementsByClassName("red")

toggle[0].addEventListener("click" , function() {
    sidebar[0].toggleAttribute("closed")
})