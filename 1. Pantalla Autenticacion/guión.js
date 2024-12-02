document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Aquí puedes agregar la lógica para validar las credenciales
  // Por ejemplo, puedes enviar una solicitud a un servidor para autenticar al usuario

  if (username === 'usuario' && password === 'contraseña') {
      alert('Autenticación exitosa');
      // Aquí puedes redirigir al usuario a otra página o realizar alguna otra acción
  } else {
      alert('Credenciales incorrectas');
  }
});