
key = '1234567890' // Clave de encriptación y desencriptación


// Función que se ejecuta al presiona el botón "Encriptar"
const mostrarTextoEncriptado = () => {
    let textoParaEncriptar = document.getElementById('textoParaEncriptar').value     //obtenemos el texto a encriptar desde el input con id textoParaEncriptar
    let textoEncriptado = encriptarTexto(textoParaEncriptar) // Encriptamos el texto
    console.log(textoEncriptado) // Mostramos el texto encriptado en la consola

    document.getElementById('textoEncriptado').innerText = textoEncriptado // se muestra el texto encriptado en el <p> con id textoEncriptado
}


// Función que se ejecuta al presionar el botón "Desencriptar"
const mostrarTextoDesencriptado = () => {

    let textoParaDesencriptar = document.getElementById('textoParaEncriptar').value;    // Obtenemos el texto a desencriptar desde el input con id textoParaEncriptar
    let textoDesencriptado = desencriptarTexto(textoParaDesencriptar) // Desencriptamos el texto
    document.getElementById('textoEncriptado').innerText = textoDesencriptado // Mostramos el texto desencriptado en el <p> con id textoDesencriptado
}


// Función que encripta el texto 
const encriptarTexto = (texto) => {
    let textoEncriptado = CryptoJS.AES.encrypt(texto, key).toString(); // Encriptamos el texto. //* El método AES.encrypt() recibe dos parámetros, el texto a encriptar y la clave de encriptación
    return textoEncriptado
}



// Función que desencripta el texto
desencriptarTexto = (texto) => {

    let bytes = CryptoJS.AES.decrypt(texto, key); // Desencriptamos el texto.

    let textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8); // Convertimos el texto desencriptado a UTF-8
    console.log(textoDesencriptado) // Mostramos el texto desencriptado en la consola
    return textoDesencriptado
}