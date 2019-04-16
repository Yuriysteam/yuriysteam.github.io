var par = document.getElementsByClassName('section-collapse')
var el = document.getElementsByClassName('button-collapse')
el[0].addEventListener("click", function(e){
    par[0].classList.toggle("section-collaps-bg")
})