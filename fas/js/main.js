var par = document.getElementsByClassName('section-collapse')
var el = document.getElementsByClassName('button-collapse')
if (el.length) {
    el[0].addEventListener("click", function(e){
      par[0].classList.toggle("section-collaps-bg")
  })
}

function validate(form) {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    // Loop over them and prevent submission
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
}