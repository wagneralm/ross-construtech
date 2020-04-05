//Mecânica Slides

const slides = document.querySelector(".slider").children,
  proximo = document.querySelector(".proxima"),
  anterior = document.querySelector(".anterior"),
  indicator = document.querySelector(".indicator");
let index = 0,
  timer = setInterval(autoPLay, 5000);

// Botão Próximo e Anterior

proximo.addEventListener("click", function () {
  proximoSlide()
  updateCircleIndicator()
  resetTimer()
});

anterior.addEventListener("click", function () {
  anteriorSlide()
  updateCircleIndicator()
  resetTimer()
})

// Indicadores 

circleIndicator();

function proximoSlide() {
  if (index == slides.length - 1) {
    index = 0
  }
  else {
    index++
  }
  changeSlide()
}

function anteriorSlide() {
  if (index == 0) {
    index = slides.length - 1;
  }
  else {
    index--;
  }

  changeSlide();
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active")
  }
  slides[index].classList.add("active")
}

function circleIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = i + 1;
    div.setAttribute("onclick", "indicateSlide(this)")
    div.id = i;
    if (i == 0) {
      div.className = "active";
    }

    indicator.appendChild(div);
  }
}

function updateCircleIndicator() {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove("active")
  }
  indicator.children[index].classList.add("active")
}

function indicateSlide(element) {
  index = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoPLay, 5000);
}

function autoPLay() {
  proximoSlide();
  updateCircleIndicator();
}

// Scroll Suave

$('.nav-links a').click(function (e) {
  e.preventDefault();
  const id = $(this).attr('href'),
    targetOffset = $(id).offset().top,
    menuHeight = $('header').innerHeight() + 30;

  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 600);
});


// Botão Mobile

const btn_mobile = document.querySelector('.btn-mobile'),
  navLinks = document.querySelector('.responsivo')

btn_mobile.addEventListener('click', () => {
  navLinks.classList.toggle("open");
  
})

