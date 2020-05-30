document.addEventListener("DOMContentLoaded", function () {
  // Slider
  const slider = document.getElementById('slider');
  const start = document.querySelector('.slider__start');
  const end = document.querySelector('.slider__end');

  const startValue = document.querySelector('.slider__result--start');
  const endValue = document.querySelector('.slider__result--end');

  let minRange = 1000;
  let maxRange = 100000;
  let startPoint = 10000;
  let coef = 5;

  let format = value => Intl
    .NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 })
    .format(value)
    .replace(/^(\D+)/, '')


  start.textContent = format(minRange);
  end.textContent = format(maxRange);
  startValue.textContent = startPoint.toLocaleString();
  endValue.textContent = ((startPoint / 100 * 5) + +startPoint).toLocaleString()

  noUiSlider.create(slider, {
    start: startPoint,
    range: {
      'min': minRange,
      'max': maxRange
    },
    step: 500
  });

  let curValue = value => startValue.textContent = Math.floor(value).toLocaleString()
  let coefValue = value => endValue.textContent = ((value / 100 * coef) + +value).toLocaleString()

  slider.noUiSlider.on('change', curValue);
  slider.noUiSlider.on('change', coefValue);


  // Swiper
  const settings = {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }

  new Swiper('.swiper-container', settings)

  // Accordion
  let titles = document.querySelectorAll('.accordion__title');

  for (let title of titles) {
    title.addEventListener('click', function () {
      let panel = this.nextElementSibling

      panel.style.maxHeight ? this.firstChild.classList.remove('opened') : this.firstChild.classList.add('opened')
      panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px"
    })
  }

  // Scroll to element
  const menuItems = document.querySelectorAll('.menu__item a');

  for (let item of menuItems) {
    item.addEventListener('click', function (e) {
      e.preventDefault()
      let href = this.getAttribute('href')
      document.getElementById(href).scrollIntoView({ behavior: 'smooth' })
    })
  }


  // Hamburger click
  const mobileMenu = document.querySelector('.menu__icon');

  mobileMenu.addEventListener('click', () => document.body.classList.toggle('openMobileMenu'))

});

