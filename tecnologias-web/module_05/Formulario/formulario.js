// EJERCICIOS 3, 4: Incrementar o decrementar la edad dentro de un rango válido
function decrementar(){
    var vedad = document.getElementById('edad').value;
    if (vedad > 18) {
        vedad = vedad - 1;
    }
    document.getElementById('edad').value = vedad;
}

function incrementar(){
    var vedad = document.getElementById('edad').value;
    vedad = parseInt(vedad) + 1; // Se castea a int para evitar la concatenación como str
    document.getElementById('edad').value = vedad;
}

// EJERCICIO 6: Pedir nombre y apellidos y mostrarlos en el campo de texto
function fullname(){
    nombre = window.prompt("¿Cual es tu nombre?");
    apellidos = window.prompt("¿Cuales son tus apellidos?");
    document.getElementById('nombre').value = nombre + " " + apellidos;
}

// EJERCICIO 11: Comprobar si el código postal contiene solo dígitos
function todoDigitos(vcp) {
    for(i = 0; i < vcp[0].value.length; i++){
        if ((vcp[0].value.charAt(i) < "0") || (vcp[0].value.charAt(i) > "9")) return false;
    }
    return true;
}

// EJERCICIOS 7, 8, 9, 10: Validar campos antes de enviar el formulario
function enviar(){
    var vsexo = document.getElementsByName('sexo');
    if(!(vsexo[0].checked || vsexo[1].checked || vsexo[2].checked)){
        alert("Debe seleccionar un sexo");
        return false;
    }

    var vcol = document.getElementsByName('colectivo');
    if (!vcol[0].selectedIndex){
        alert("Debe seleccionar un colectivo");
        return false;
    }
    
    var vcp = document.getElementsByName('cp');
    // getElementsByName devuelve una lista de elementos con el nombre 'cp'.
    // Se usa [0] porque solo hay un campo con ese nombre.
    if (vcp[0].value.length != 5 || !todoDigitos(vcp)){
        alert("El codigo postal debe tener 5 digitos");
        vcp[0].select();
        vcp[0].focus();
        return false;
    }
    
    if (!confirm("¿Desea enviar el formulario?")) return false;
}

// EJERCICIO 12: Mostrar valores del formulario en el área de texto
function mostrar(formulario){
    var vvalores = "";
    vvalores = "Nombre = " + formulario.nombre.value + "\n" + 
               "Edad = " + formulario.edad.value + "\n" + 
               "Código postal = " + formulario.cp.value + "\n"
    
    var vsexo = "";
    for (var i = 0; i < formulario.sexo.length; i++){
        if (formulario.sexo[i].checked) {
            vsexo = formulario.sexo[i].value;
            break;
        }
    }
    vvalores += "Sexo = " + vsexo + "\n";
    
    var vcolectivo = formulario.colectivo.options[formulario.colectivo.selectedIndex].text;
    vvalores += "Colectivo = " + vcolectivo + "\n";
    
    var vgrado = formulario.grado.checked ? "Sí" : "No";
    var vmaster = formulario.master.checked ? "Sí" : "No";
    var vdocto = formulario.doctorado.checked ? "Sí" : "No";
    vvalores += "Grado = " + vgrado + "\n" + "Máster = " + vmaster + "\n" + "Doctorado = " + vdocto;
    
    formulario.valores.value = vvalores;
}