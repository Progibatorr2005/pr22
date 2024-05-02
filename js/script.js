const swiperContainer = document.querySelector('.swiper-container');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

let currentSlide = 0;

function showSlide(index) {
  swiperWrapper.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide); 






const catalogButton = document.getElementById('catalog-button');
const catalogOverlay = document.getElementById('catalog-overlay');
const closeButton = document.getElementById('close-catalog');

catalogButton.addEventListener('click', () => {
  catalogOverlay.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
  catalogOverlay.classList.add('hidden');
});

// Закрытие каталога при клике вне его области
catalogOverlay.addEventListener('click', (event) => {
  if (event.target === catalogOverlay) {
    catalogOverlay.classList.add('hidden');
  }
});




function openCity(evt, cityName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

   document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}












const registerBtn = document.getElementById('register-btn');
const registerModal = document.getElementById('register-modal');
const loginModal = document.getElementById('login-modal');
const closeButtons = document.querySelectorAll('.close-button');
const googleBtn = document.querySelector('.google-btn');
const confirmBtn = document.querySelectorAll('.confirm-btn');
const loginLink = document.getElementById('login-link');

registerBtn.addEventListener('click', () => {
  registerModal.style.display = 'block';
});

closeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    registerModal.style.display = 'none';
    loginModal.style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  if (event.target == registerModal || event.target == loginModal) {
    registerModal.style.display = 'none';
    loginModal.style.display = 'none';
  }
});

googleBtn.addEventListener('click', () => {
  // Логика для входа через Google
  registerModal.style.display = 'none';
  loginModal.style.display = 'block';
});

confirmBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const loginEmailInput = document.getElementById('login-email');
    const loginPasswordInput = document.getElementById('login-password');

    if (btn.classList.contains('confirm-btn') && registerModal.style.display === 'block') {
      // Регистрация
      alert('Вы зарегистрированы!');
      registerModal.style.display = 'none';
    } else if (btn.classList.contains('confirm-btn') && loginModal.style.display === 'block') {
      // Вход
      if (
        loginEmailInput.value === 'example@example.com' &&
        loginPasswordInput.value === 'password'
      ) {
        alert('Вы вошли!');
        loginModal.style.display = 'none';
      } else {
        alert('Неправильный email или пароль');
      }
    }
  });
});

loginLink.addEventListener('click', () => {
  registerModal.style.display = 'none';
  loginModal.style.display = 'block';
});