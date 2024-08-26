const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');


// Función para validar que no se ingresen mayúsculas o acentos
const validarEntrada = (event) => {
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios. regex es una expresión regular que se encarga de validar que solo se ingresen letras minúsculas y espacios

    // Si el carácter no es válido, prevenir la entrada
    if (!regex.test(event.key)) {
        event.preventDefault();
        alert("Solo se permiten letras minúsculas y sin acentos");
    }
};



// Función que se ejecuta al presiona el botón "Encriptar"
const btnEncriptar = () => {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = '';
    mensaje.style.backgroundImage = "none";
}

// Función que se ejecuta al presionar el botón "Desencriptar"
const btnDesencriptar = () => {
    const textoDesencriptado = desencriptar(mensaje.value);
    mensaje.value = textoDesencriptado;
    textArea.value = '';
    textArea.style.backgroundImage = "none";
}


// Función que encripta el texto
const encriptar = (stringEncriptado) => {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }
    return stringEncriptado;
}



// Función que desencripta el texto
const desencriptar = (stringDesencriptado) => {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

// Implementacion de boton copiar
const btnCopiar = () => {
    navigator.clipboard.writeText(mensaje.value); // Copia el texto que hay en mensaje.value
}



// Validar la entrada de texto en tiempo real
textArea.addEventListener('keypress', validarEntrada); //! Evento que se ejecuta al presionar una tecla. keypress es un evento que se dispara cuando una tecla es presionada y despues ejecuta la función validarEntrada