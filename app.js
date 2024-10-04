const express = require('express');
const path = require('path');
const gostCrypto = require('gost-crypto'); // Simulación para GOST
const cryptoJS = require('crypto-js'); // Para SHA-1

// Inicializa la aplicación Express
const app = express();

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta principal para la página de inicio
app.get('/', (req, res) => {
  res.render('index');
});

// Rutas para mostrar cada formulario de cifrado
app.get('/cesar', (req, res) => {
  res.render('cesar'); 
});

app.get('/escitala', (req, res) => {
  res.render('escitala'); 
});

app.get('/gost', (req, res) => {
  res.render('gost'); 
});

app.get('/luc', (req, res) => {
  res.render('luc'); 
});

app.get('/sha1', (req, res) => {
  res.render('sha1'); 
});

// -------- Cifrado César --------
app.post('/cesar/encrypt', (req, res) => {
  const { data, key } = req.body;
  if (!data || !key) {
    return res.status(400).json({ error: 'Se requieren un mensaje y una clave para cifrar' });
  }
  const shift = parseInt(key);
  let encrypted = '';
  for (let i = 0; i < data.length; i++) {
    const charCode = data.charCodeAt(i);
    encrypted += String.fromCharCode(charCode + shift);
  }
  res.json({ encrypted });
});

app.post('/cesar/decrypt', (req, res) => {
  const { data, key } = req.body;
  if (!data || !key) {
    return res.status(400).json({ error: 'Se requieren un mensaje y una clave para descifrar' });
  }
  const shift = parseInt(key);
  let decrypted = '';
  for (let i = 0; i < data.length; i++) {
    const charCode = data.charCodeAt(i);
    decrypted += String.fromCharCode(charCode - shift);
  }
  res.json({ decrypted });
});

// -------- Cifrado Escítala --------
app.post('/escitala/encrypt', (req, res) => {
  const { data, key } = req.body;
  if (!data || !key) {
    return res.status(400).json({ error: 'Se requieren un mensaje y una clave para cifrar' });
  }
  const numColumns = parseInt(key);
  let encrypted = '';
  for (let i = 0; i < numColumns; i++) {
    for (let j = i; j < data.length; j += numColumns) {
      encrypted += data[j];
    }
  }
  res.json({ encrypted });
});

app.post('/escitala/decrypt', (req, res) => {
  const { data, key } = req.body;
  if (!data || !key) {
    return res.status(400).json({ error: 'Se requieren un mensaje y una clave para descifrar' });
  }
  const numColumns = parseInt(key);
  const numRows = Math.ceil(data.length / numColumns);
  let decrypted = new Array(data.length);
  let index = 0;
  for (let i = 0; i < numColumns; i++) {
    for (let j = i; j < data.length; j += numColumns) {
      decrypted[j] = data[index++];
    }
  }
  res.json({ decrypted: decrypted.join('') });
});

// -------- Simulación Cifrado GOST --------
app.post('/gost/encrypt', (req, res) => {
  const { data, key } = req.body;
  if (!data || !key) {
    return res.status(400).json({ error: 'Se requieren un mensaje y una clave para cifrar' });
  }
  try {
    const shift = parseInt(key) % 256;
    let encrypted = '';
    for (let i = 0; i < data.length; i++) {
      const charCode = data.charCodeAt(i);
      encrypted += String.fromCharCode((charCode + shift) % 256);
    }
    res.json({ encrypted });
  } catch (error) {
    res.status(500).json({ error: 'Error al cifrar con GOST' });
  }
});

app.post('/gost/decrypt', (req, res) => {
  const { data, key } = req.body;
  if (!data || !key) {
    return res.status(400).json({ error: 'Se requieren un mensaje y una clave para descifrar' });
  }
  try {
    const shift = parseInt(key) % 256;
    let decrypted = '';
    for (let i = 0; i < data.length; i++) {
      const charCode = data.charCodeAt(i);
      decrypted += String.fromCharCode((charCode - shift + 256) % 256);
    }
    res.json({ decrypted });
  } catch (error) {
    res.status(500).json({ error: 'Error al descifrar con GOST' });
  }
});

// -------- Cifrado LUC --------
app.post('/luc/encrypt', (req, res) => {
  const { data, key } = req.body;
  if (!data || !key) {
    return res.status(400).json({ error: 'Se requieren un mensaje y una clave para cifrar' });
  }
  try {
    let encrypted = '';
    for (let i = 0; i < data.length; i++) {
      const charCode = data.charCodeAt(i);
      encrypted += String.fromCharCode(charCode + parseInt(key));
    }
    res.json({ encrypted });
  } catch (error) {
    res.status(500).json({ error: 'Error al cifrar con LUC' });
  }
});

app.post('/luc/decrypt', (req, res) => {
  const { data, key } = req.body;
  if (!data || !key) {
    return res.status(400).json({ error: 'Se requieren un mensaje y una clave para descifrar' });
  }
  try {
    let decrypted = '';
    for (let i = 0; i < data.length; i++) {
      const charCode = data.charCodeAt(i);
      decrypted += String.fromCharCode(charCode - parseInt(key));
    }
    res.json({ decrypted });
  } catch (error) {
    res.status(500).json({ error: 'Error al descifrar con LUC' });
  }
});

// -------- Hash SHA-1 --------
app.post('/sha1/encrypt', (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(400).json({ error: 'Se requiere un mensaje para generar el hash' });
  }
  try {
    const hash = cryptoJS.SHA1(data).toString();
    res.json({ hash });
  } catch (error) {
    res.status(500).json({ error: 'Error al generar el hash con SHA-1' });
  }
});

// Configura el puerto y arranca el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
