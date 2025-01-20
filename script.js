const form = document.querySelector('.contacto__formulario');
const nombreInput = document.querySelector('.contacto__campo[type="text"]');
const emailInput = document.querySelector('.contacto__campo[type="email"]');

// Crear elementos para los mensajes de error
const nombreError = document.createElement('p');
nombreError.classList.add('error-message');

const emailError = document.createElement('p');
emailError.classList.add('error-message');

// Escuchar el evento submit
form.addEventListener('submit', (e) => {
    let isValid = true; // Bandera para verificar si todo está validado correctamente

    // Limpiar mensajes de error previos
    nombreError.textContent = '';
    emailError.textContent = '';

    // Validación del campo "Nombre"
    const nombre = nombreInput.value.trim();
    if (nombre === '') {
        nombreError.textContent = 'El campo Nombre no puede estar vacío.';
        nombreInput.insertAdjacentElement('afterend', nombreError);
        isValid = false;
    } else if (nombre.length > 50) {
        nombreError.textContent = 'El campo Nombre no puede exceder 50 caracteres.';
        nombreInput.insertAdjacentElement('afterend', nombreError);
        isValid = false;
    }

    // Validación del campo "Correo electrónico"
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar formato de email

    if (email === '') {
        emailError.textContent = 'El campo E-mail no puede estar vacío.';
        emailInput.insertAdjacentElement('afterend', emailError);
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Por favor ingresa un formato de correo válido (ejemplo: texto@texto.com).';
        emailInput.insertAdjacentElement('afterend', emailError);
        isValid = false;
    }

    // Si alguna validación falla, prevenir el envío del formulario
    if (!isValid) {
        e.preventDefault();
    }
});
