document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const idNumber = document.getElementById('idNumber').value;
    const birthDate = document.getElementById('birthDate').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica para validar los datos ingresados
    // Por ejemplo, puedes verificar que la cédula tenga un formato válido, que la fecha de nacimiento sea correcta, que el correo electrónico tenga un formato válido, que la contraseña cumpla con requisitos de seguridad, etc.

    // Mostrar los datos ingresados en una alerta
    alert(`Nombres: ${firstName}\nApellidos: ${lastName}\nCédula: ${idNumber}\nFecha de Nacimiento: ${birthDate}\nCorreo Electrónico: ${email}\nContraseña: ${password}`);

    // Aquí puedes agregar la lógica para enviar los datos a un servidor o realizar alguna otra acción
});