// Ejemplo de funcionalidad: Validación del formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert('Gracias por tu mensaje, ' + nombre + '. Te responderé pronto.');
        // Aquí puedes agregar código para enviar el formulario a un servidor
    } else {
        alert('Por favor, completa todos los campos.');
    }
});