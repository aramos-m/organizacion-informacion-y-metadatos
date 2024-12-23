var principal = document.getElementById('principal');
var mensaje = document.getElementById('mensaje');
var campo1 = document.getElementById('campo1');
var campo2 = document.getElementById('campo2');
var campo3 = document.getElementById('campo3');
var botones = {
    boton01: document.getElementById('boton01'),
    boton02: document.getElementById('boton02'),
    boton03: document.getElementById('boton03'),
    boton04: document.getElementById('boton04'),
    boton05: document.getElementById('boton05'),
    boton06: document.getElementById('boton06'),
    boton07: document.getElementById('boton07'),
    boton08: document.getElementById('boton08'),
};

// EJERCICIO 1: Cambio de color al pasar el ratón
principal.addEventListener('mouseover', function() {
    principal.style.backgroundColor = 'beige';
});

// EJERCICIO 2: Cambio de color al sacar el ratón
principal.addEventListener('mouseout', function() {
    principal.style.backgroundColor = 'white';
});

// EJERCICIO 3: Mostrar coordenadas del clic
principal.addEventListener('click', function(event) {
    // offsetX y offsetY dan las coordenadas del clic dentro de un elemento.
    var x = event.offsetX;
    var y = event.offsetY;
    mensaje.innerHTML = 'Coordenadas: (' + x + ', ' + y + ')';
});

// EJERCICIO 4: Copiar valor de campo1 al escribir
campo1.addEventListener('keypress', function() {
    mensaje.textContent = campo1.value;
});

// EJERCICIO 5: Concatenar campos con "@" al pulsar boton01
botones.boton01.addEventListener('click', function() {
    mensaje.textContent = campo1.value + '@' + campo2.value + '@' + campo3.value;
});

// EJERCICIO 6: Cambiar color de fondo de mensaje según campo2
botones.boton02.addEventListener('click', function() {
    mensaje.style.backgroundColor = campo2.value;
});

// EJERCICIO 7: Verificar si campo1 y campo3 coinciden
botones.boton03.addEventListener('click', function() {
    if (campo1.value === campo3.value) {
        mensaje.textContent = 'Coinciden';
    } else {
        mensaje.textContent = 'No coinciden';
    }
});

// EJERCICIO 8: Añadir párrafo con concatenación
botones.boton04.addEventListener('click', function() {
    var nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = campo1.value + '@' + campo2.value + '@' + campo3.value;
    principal.appendChild(nuevoParrafo);
});

// EJERCICIO 9: Repetir texto de campo1 según campo3
botones.boton05.addEventListener('click', function() {
    var repeticiones = parseInt(campo3.value, 10);
    for (var i = 0; i < repeticiones; i++) {
        var nuevoParrafo = document.createElement('p');
        nuevoParrafo.textContent = campo1.value;
        principal.appendChild(nuevoParrafo);
    }
});

// EJERCICIO 10: Eliminar todos los párrafos de principal
botones.boton06.addEventListener('click', function() {
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }
});

// EJERCICIO 11: Alternar visibilidad de principal
botones.boton07.addEventListener('click', function() {
    if (principal.style.visibility === 'hidden') {
        principal.style.visibility = 'visible';
    } else {
        principal.style.visibility = 'hidden';
    }
});

// EJERCICIO 12: Contador de tiempo al pulsar boton08
botones.boton08.addEventListener('click', function() {
    var segundos = parseInt(campo3.value, 10) * 1000;
    setTimeout(function() {
        mensaje.textContent = 'Han pasado ' + campo3.value + ' segundos';
    }, segundos);
});
