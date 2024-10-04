// Lógica para manejar el Cifrado César
const cesarForm = document.getElementById('cesarForm');
if (cesarForm) {
  cesarForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const mensaje = document.getElementById('mensajeCesar').value;
    const clave = document.getElementById('claveCesar').value;

    try {
      const response = await fetch('/cesar/encrypt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: mensaje, key: clave })
      });

      const result = await response.json();
      document.getElementById('resultadoCesar').textContent = result.encrypted;
    } catch (error) {
      console.error('Error al cifrar:', error);
      alert('Error al cifrar el mensaje.');
    }
  });

  document.getElementById('descifrarCesar').addEventListener('click', async function () {
    const mensaje = document.getElementById('mensajeCesar').value;
    const clave = document.getElementById('claveCesar').value;

    try {
      const response = await fetch('/cesar/decrypt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: mensaje, key: clave })
      });

      const result = await response.json();
      document.getElementById('resultadoCesar').textContent = result.decrypted;
    } catch (error) {
      console.error('Error al descifrar:', error);
      alert('Error al descifrar el mensaje.');
    }
  });

  document.getElementById('copiarCesar').addEventListener('click', function () {
    const resultado = document.getElementById('resultadoCesar').textContent;
    navigator.clipboard.writeText(resultado);
    alert('Resultado copiado al portapapeles');
  });
}

// Lógica para manejar el Cifrado Escítala
const escitalaForm = document.getElementById('escitalaForm');
if (escitalaForm) {
  escitalaForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const mensaje = document.getElementById('mensajeEscitala').value;
    const clave = document.getElementById('claveEscitala').value;

    const response = await fetch('/escitala/encrypt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: mensaje, key: clave })
    });

    const result = await response.json();
    document.getElementById('resultadoEscitala').textContent = result.encrypted;
  });

  document.getElementById('descifrarEscitala').addEventListener('click', async function () {
    const mensaje = document.getElementById('mensajeEscitala').value;
    const clave = document.getElementById('claveEscitala').value;

    const response = await fetch('/escitala/decrypt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: mensaje, key: clave })
    });

    const result = await response.json();
    document.getElementById('resultadoEscitala').textContent = result.decrypted;
  });

  document.getElementById('copiarEscitala').addEventListener('click', function () {
    const resultado = document.getElementById('resultadoEscitala').textContent;
    navigator.clipboard.writeText(resultado);
    alert('Resultado copiado al portapapeles');
  });
}

// Lógica para manejar el Cifrado GOST
const gostForm = document.getElementById('gostForm');
if (gostForm) {
  gostForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const mensaje = document.getElementById('mensajeGost').value;
    const clave = document.getElementById('claveGost').value;

    try {
      const response = await fetch('/gost/encrypt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: mensaje, key: clave })
      });

      const result = await response.json();
      document.getElementById('resultadoGost').textContent = result.encrypted;
    } catch (error) {
      console.error('Error al cifrar:', error);
      alert('Error al cifrar el mensaje.');
    }
  });

  document.getElementById('descifrarGost').addEventListener('click', async function () {
    const mensaje = document.getElementById('mensajeGost').value;
    const clave = document.getElementById('claveGost').value;

    try {
      const response = await fetch('/gost/decrypt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: mensaje, key: clave })
      });

      const result = await response.json();
      document.getElementById('resultadoGost').textContent = result.decrypted;
    } catch (error) {
      console.error('Error al descifrar:', error);
      alert('Error al descifrar el mensaje.');
    }
  });

  document.getElementById('copiarGost').addEventListener('click', function () {
    const resultado = document.getElementById('resultadoGost').textContent;
    navigator.clipboard.writeText(resultado);
    alert('Resultado copiado al portapapeles');
  });
}

// Repite lo mismo para LUC y SHA-1
const lucForm = document.getElementById('lucForm');
if (lucForm) {
  lucForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const mensaje = document.getElementById('mensajeLuc').value;
    const clave = document.getElementById('claveLuc').value;

    try {
      const response = await fetch('/luc/encrypt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: mensaje, key: clave })
      });

      const result = await response.json();
      document.getElementById('resultadoLuc').textContent = result.encrypted;
    } catch (error) {
      console.error('Error al cifrar:', error);
      alert('Error al cifrar el mensaje.');
    }
  });

  document.getElementById('descifrarLuc').addEventListener('click', async function () {
    const mensaje = document.getElementById('mensajeLuc').value;
    const clave = document.getElementById('claveLuc').value;

    try {
      const response = await fetch('/luc/decrypt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: mensaje, key: clave })
      });

      const result = await response.json();
      document.getElementById('resultadoLuc').textContent = result.decrypted;
    } catch (error) {
      console.error('Error al descifrar:', error);
      alert('Error al descifrar el mensaje.');
    }
  });

  document.getElementById('copiarLuc').addEventListener('click', function () {
    const resultado = document.getElementById('resultadoLuc').textContent;
    navigator.clipboard.writeText(resultado);
    alert('Resultado copiado al portapapeles');
  });
}

const sha1Form = document.getElementById('sha1Form');
if (sha1Form) {
  sha1Form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const mensaje = document.getElementById('mensajeSha1').value;

    try {
      const response = await fetch('/sha1/encrypt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: mensaje })
      });

      const result = await response.json();
      document.getElementById('resultadoSha1').textContent = result.hash;
    } catch (error) {
      console.error('Error al generar el hash:', error);
      alert('Error al generar el hash.');
    }
  });

  document.getElementById('copiarSha1').addEventListener('click', function () {
    const resultado = document.getElementById('resultadoSha1').textContent;
    navigator.clipboard.writeText(resultado);
    alert('Resultado copiado al portapapeles');
  });
}
