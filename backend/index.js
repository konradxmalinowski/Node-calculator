const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Backend works' });
});

app.post('/calculator', (req, res) => {
  let { a, b, operator } = req.body;
  a = Number(a);
  b = Number(b);

  if (b === 0 && operator) {
    res.status(400).json({ message: "You can't divide be 0" });
    return;
  }

  res.status(200).json({ result: eval(`${a}${operator}${b}`) });
});

app.listen(PORT, () => {
  console.log('Backend running on http://localhost:3000');
});
