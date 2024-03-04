//Ocultamos los elementos que no queremos ver por el momento
ocultarElementosDespuesEncriptar('respuesta');
ocultarElementosDespuesEncriptar('botonCopy');

//Mostramos elementos de informacion
mostrarElementosDespuesEncriptar('conMuñeco');
mostrarElementosDespuesEncriptar('conMensajes');

//Funcion para encriptar el texto ingresado
function botonEncriptar() {
    //Variables a utilizar
    const arregloPalabra = [];
    const vocalA = "ai";
    const vocalE = "enter";
    const vocalI = "imes";
    const vocalO = "ober";
    const vocalU = "ufat";
    let palabraEncriptada = "";
    let mostrarPalabra = "";
    let i;

    //Capturamos el valor ingresado del usuario y lo almacenamos en la variable palabraIngresa
    let palabraIngresada = document.getElementById('texto_ingresado').value.trim();

    //Si no hay texto o hay espacio antes del texto
    if (palabraIngresada === "") {
        alert("Por favor ingrese un texto para encriptar");
    }
    //Si hay texto ingresado
    else {
        //Recorremos la palabra ingresada 
        for (i = 0; i < palabraIngresada.length; i++) {
            //Almacenamos la palabra ingresada en un arreglo
            arregloPalabra.push(palabraIngresada[i]);
        }

        //Recorremos el arreglo para encontrar las vocales
        for (i = 0; i < arregloPalabra.length; i++) {
            //Cambiamos las vocales por los valores asignados
            if (arregloPalabra[i] === 'a') {
                arregloPalabra[i] = vocalA;
            } else {
                if (arregloPalabra[i] === 'e') {
                    arregloPalabra[i] = vocalE;
                } else {
                    if (arregloPalabra[i] === 'i') {
                        arregloPalabra[i] = vocalI
                    } else {
                        if (arregloPalabra[i] === 'o') {
                            arregloPalabra[i] = vocalO;
                        } else {
                            if (arregloPalabra[i] === 'u') {
                                arregloPalabra[i] = vocalU;
                            }
                        }
                    }
                }
            }
        }

        //Con join unimos todos los elementos del arreglo para formar una cadena
        palabraEncriptada = arregloPalabra.join('');

        //Mostramos el resultado en parrafo p con id = respuesta
        document.getElementById('respuesta').style.display = 'block';
        mostrarPalabra = document.getElementById('respuesta');
        mostrarPalabra.innerHTML = palabraEncriptada;

        //Mostramos el boton copiar luego de encriptar la palabra
        mostrarElementosDespuesEncriptar('botonCopy');
        //Ocultamos imagen y mensaje informativo
        ocultarElementosDespuesEncriptar('conMuñeco');
        ocultarElementosDespuesEncriptar('conMensajes');
    }
}

//Funcion que valida solo el ingreso de minusculas
function validarMinusculas(textoIngresado) {
    textoIngresado.value = textoIngresado.value.toLowerCase().replace(/[^a-z]/g, ' ');
}

//Funcion que limpia el TexTarea
function limpiarTextarea() {
    document.getElementById('texto_ingresado').value = '';
}

//Funcion que desencripta el texto encriptado
function botonDesencriptar() {
    //Variables a utilizar 
    const vocalA = "ai";
    const vocalE = "enter";
    const vocalI = "imes";
    const vocalO = "ober";
    const vocalU = "ufat";

    //Obtener el mensaje encriptado desde el textarea
    let mensajeEncriptado = document.getElementById('texto_ingresado').value.trim();

    //Si no hay texto en textarea
    if (mensajeEncriptado === "") {
        alert("Debes ingresar un texto encriptado para desencriptar");
    } 
    //Si hay texto en el textarea
    else {
        // Revertir el reemplazo de las vocales
        let mensajeDesencriptado = mensajeEncriptado
            .replace(new RegExp(vocalA, 'g'), 'a')
            .replace(new RegExp(vocalE, 'g'), 'e')
            .replace(new RegExp(vocalI, 'g'), 'i')
            .replace(new RegExp(vocalO, 'g'), 'o')
            .replace(new RegExp(vocalU, 'g'), 'u');

        // Mostrar el mensaje desencriptado en el elemento 'respuesta'
        let mostrarPalabra = document.getElementById('respuesta');
        mostrarPalabra.innerHTML = mensajeDesencriptado;
    }
}

//Funcion que permite copiar el texto
function botonCopiar() {
    let texto = document.getElementById('respuesta');
    navigator.clipboard.writeText(texto.textContent);
    alert("Texto copiado al portapapeles");
}

function mostrarElementosDespuesEncriptar(id) {
    // Mostrar elemento después de encriptar
    document.getElementById(id).style.display = 'block';
}

function ocultarElementosDespuesEncriptar(id) {
    // Ocultar elemento antes de encriptar
    document.getElementById(id).style.display = 'none';
}