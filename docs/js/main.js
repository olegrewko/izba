$(function () {
  $(".menu a, .totop").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  // ===== SLICK SLIDER =====
  $('.slider-blog__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $(".radio input").on("click", function (e) {
    console.clear();
    console.log(this.checked);
    e.preventDefault();
    setTimeout(() => $(this).prop("checked", !this.checked).trigger("change"));
  });
});

// ===== ВЫПАДАЮЩИЕ МЕНЮ =====
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myFunctionHeadphones() {
  document.getElementById("myHeadphones").classList.toggle("show");
}
function myFunctionWireless() {
  document.getElementById("myWireless").classList.toggle("show");
}
function myFunctionFind() {
  document.getElementById("myFind").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ===== СТЕППЕР (ИСПРАВЛЕННЫЙ) =====
var $stepper = document.querySelector('.stepper');
if ($stepper) {
  const $stepperInput = $stepper.querySelector('.stepper__input');
  const $stepperMinus = $stepper.querySelector('.stepper__btn--minus');
  const $stepperPlus = $stepper.querySelector('.stepper__btn--plus');

  if ($stepperInput && $stepperMinus && $stepperPlus) {
    $stepperInput.addEventListener('keydown', (e) => {
      console.log(e.currentTarget.value);
      if (e.currentTarget.value <= 1) {
        $stepperMinus.classList.add('stepper__btn--disabled');
        $stepperPlus.classList.remove('stepper__btn--disabled');
      } else {
        $stepperMinus.classList.remove('stepper__btn--disabled');
      }
      if (e.currentTarget.value > 99998) {
        $stepperMinus.classList.remove('stepper__btn--disabled');
        $stepperPlus.classList.add('stepper__btn--disabled');
      } else {
        $stepperPlus.classList.remove('stepper__btn--disabled');
      }
    });

    $stepperPlus.addEventListener('click', (e) => {
      let currentValue = parseInt($stepperInput.value);
      currentValue++;
      $stepperInput.value = currentValue;
      $stepperMinus.classList.remove('stepper__btn--disabled');
      if ($stepperInput.value > 99998) {
        $stepperInput.value = 99999;
        $stepperPlus.classList.add('stepper__btn--disabled');
      } else {
        $stepperPlus.classList.remove('stepper__btn--disabled');
      }
    });

    $stepperMinus.addEventListener('click', (e) => {
      let currentValue = parseInt($stepperInput.value);
      currentValue--;
      $stepperInput.value = currentValue;
      $stepperPlus.classList.remove('stepper__btn--disabled');
      if ($stepperInput.value <= 1) {
        $stepperInput.value = 1;
        $stepperMinus.classList.add('stepper__btn--disabled');
      } else {
        $stepperMinus.classList.remove('stepper__btn--disabled');
      }
    });
  }
}
