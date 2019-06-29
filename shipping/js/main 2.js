var par = document.getElementsByClassName('section-collapse')
var el = document.getElementsByClassName('button-collapse')
if (el.length) {
    el[0].addEventListener("click", function(e){
      par[0].classList.toggle("section-collaps-bg")
      par[1].classList.toggle("section-collaps-bg")
      par[2].classList.toggle("section-collaps-bg")
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

function adjustHeight(el){
  el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "35px";
}
function adjustHeight(el){
  el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "35px";
}
function visibleForm() {
  $("#formWrappper").removeClass("hide-form");
  $("#sendedForm").removeClass("form-no-visible");
}

$(document).ready(function () {
  //if cookie hasn't been set...
  if (document.cookie.indexOf("ModalShown=true")<0) {
      $("#myModal").addClass("show-message");
      //Modal has been shown, now set a cookie so it never comes back
      $("#myModalClose").click(function () {
          $("#myModal").removeClass("show-message");
          document.cookie = "ModalShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    });
  }
});