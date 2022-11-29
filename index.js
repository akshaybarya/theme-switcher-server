const express = require('express');

const app = express();

const theme = { 
  '--primaryClr': '#0ABB92',
  '--secondaryClr': '#98A4FF',
  '--primaryBg': '#121212'
};

const theme2 = { 
  '--primaryClr': '#F67280',
  '--secondaryClr': '#F8B195',
  '--primaryBg': '#fff'
};

app.get('/', (_req, res) => {
  res.send(theme);
});

app.get('/2', (_req, res) => {
  res.send(theme2);
});

app.listen(process.env.PORT ||4000, () => {
  console.log('Server Started at port 4000')
})