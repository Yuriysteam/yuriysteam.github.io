window.onload = function (event) {
  const itemButtons = document.querySelectorAll(".item-button");
  Array.from(itemButtons).forEach(function (element) {
    element.addEventListener("click", onItemBtnClick);
  });

  render();
};

let form = "circle.png";
let pattern = "";
let brand = "";

let formName = "circle";

function onItemBtnClick() {
  const option = this.getAttribute("data-option");
  const name = this.getAttribute("data-name");
  const value = this.getAttribute("data-value");
  switch (option) {
    case "form":
      form = value;
      formName = name;
      changeActiveClass("#formItems", this);
      render(name);
      break;
    case "pattern":
      pattern = value;
      changeActiveClass("#patternItems", this);
      render();
      break;
    case "brand":
      brand = value;
      changeActiveClass("#brandItems", this);
      render();
      break;
    default:
      break;
  }
}

function render() {
  let brandPath = "";
  let patternPath = "";
  let formPath = "";

  if (brand) {
    brandPath = `"images/brands/${brand}"`;
  }
  if (pattern) {
    patternPath = `"images/patterns/${pattern}"`;
  }
  if (form) {
    formPath = `"images/forms/${form}"`;
  }

  let backgroundImage = `url(${brandPath}), url(${patternPath}), url(${formPath})`;

  document.getElementById("mainLayer").style.backgroundImage = backgroundImage;
  document.getElementById("mainLayer").style.backgroundSize =
    "auto, auto, contain";
  document.getElementById("mainLayer").style.height = "500px";

  switch (formName) {
    case "circle":
      document.getElementById("mainLayer").style.borderRadius = "100%";
      break;
    case "rectangle":
      document.getElementById("mainLayer").style.borderRadius = "38px";
      break;
    case "sector":
      document.getElementById("mainLayer").style.height = "250px";
      document.getElementById("mainLayer").style.borderRadius =
        "0 0 500px 500px";
      document.getElementById("mainLayer").style.backgroundSize =
        "auto, auto, auto";
      break;
    default:
      break;
  }
}

function changeActiveClass(id, element) {
  let selector = `${id} .item-button`;
  let btns = document.querySelectorAll(selector);
  clearActiveClass(btns);
  element.classList.add("active");
}

function clearActiveClass(btns) {
  Array.from(btns).forEach(function (element) {
    element.classList.remove("active");
  });
}
