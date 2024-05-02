

const priceRange = document.getElementById('price-range');
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');

// Установка начальных значений
let minVal = 0;
let maxVal = 1000;

// Обновление значений при изменении ползунка
priceRange.addEventListener('input', () => {
  minVal = priceRange.value.split(',')[0];
  maxVal = priceRange.value.split(',')[1];

  minPrice.textContent = minVal;
  maxPrice.textContent = maxVal;

  // Здесь вы можете добавить код для фильтрации товаров по цене
});

// Инициализация ползунка (используйте библиотеку noUiSlider или аналогичную)
noUiSlider.create(priceRange, {
  start: [minVal, maxVal],
  connect: true,
  range: {
    'min': 0,
    'max': 1000
  }
});
