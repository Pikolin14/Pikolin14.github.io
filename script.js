// Ejemplo de funcionalidad: Validación del formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validar campos
    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validar formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }

    // Mostrar mensaje de éxito
    alert(`Gracias por tu mensaje, ${nombre}. Te responderé pronto.`);

    // Limpiar el formulario
    document.getElementById('formulario-contacto').reset();

    /*
    if (nombre && email && mensaje) {
        alert('Gracias por tu mensaje, ' + nombre + '. Te responderé pronto.');
        // Aquí puedes agregar código para enviar el formulario a un servidor
    } else {
        alert('Por favor, completa todos los campos.');
    }*/
});