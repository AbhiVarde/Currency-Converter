const c1 = document.getElementById('currency-one');
const a1 = document.getElementById('amount-one');
const c2 = document.getElementById('currency-two');
const a2 = document.getElementById('amount-two');

const rate1 = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency1 = c1.value;
  const currency2 = c2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency2];

      rate1.innerText = `1 ${currency1} = ${rate} ${currency2}`;

      a2.value = (a1.value * rate).toFixed(2);
    });
}

// Event listeners
c1.addEventListener('change', calculate);
a1.addEventListener('input', calculate);
c2.addEventListener('change', calculate);
a2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = c1.value;
  c1.value = c2.value;
  c2.value = temp;
  calculate();
});

calculate();