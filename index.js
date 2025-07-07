// your code goes here
const inputEl = document.getElementById('temp-input');
const unitEl = document.getElementById('unit-select');
const btn = document.getElementById('convert-btn');
const resultEl = document.getElementById('result');

btn.addEventListener('click', () => {
  const raw = inputEl.value.trim();
  if (raw === '' || isNaN(raw)) {
    resultEl.innerHTML = `<span class="error">Please enter a valid number.</span>`;
    return;
  }

  const val = parseFloat(raw);
  const unit = unitEl.value;
  let converted, toUnit;

  if (unit === 'C') {
    converted = val * 9/5 + 32;
    toUnit = '°F';
  } else {
    converted = (val - 32) * 5/9;
    toUnit = '°C';
  }

  resultEl.textContent = `${converted.toFixed(2)} ${toUnit}`;
});
