const calculateButton = document.querySelector('#calculate-btn');
const inputA = document.querySelector('input#a');
const inputB = document.querySelector('input#b');
const inputOperator = document.querySelector('#operator');
const pResult = document.querySelector('#result');

calculateButton.addEventListener('click', async () => {
  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const operator = inputOperator.value;

  try {
    const response = await fetch('http://localhost:3000/calculator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ a, b, operator }),
    });

    if (!response.ok) {
      throw new Error('Invalid response');
    }

    const data = await response.json();
    pResult.textContent = data.result;
  } catch (error) {
    console.log(`Failed to get endpoint. Error: ${error.message}`);
  }
});
