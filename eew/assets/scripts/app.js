const anchors = document.querySelectorAll('.main-menu__root > li:not(.header__lang) > a')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

window.onscroll = function emParallax() {
  if (window.pageYOffset > 0) {
    document.getElementById("js-parallax-on-scroll").style.fontSize =
      (window.pageYOffset / 20) * .1 + "em";
  }
}