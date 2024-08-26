// const CryptoJS = window.CryptoJS; // Importamos la librería de CryptoJS
const key = '1234567890' // Clave de encriptación y desencriptación


const mostrarTexto = () => {
    let textoParaEncriptar = document.getElementById('textoParaEncriptar').value // Obtenemos el texto a encriptar desde el input con id textoParaEncriptar
    const textoCifrado = CryptoJS.AES.encrypt(textoParaEncriptar, key).toString(); // Encriptamos el texto. //* El método AES.encrypt() recibe dos parámetros, el texto a encriptar y la clave de encriptación
    
    console.log(textoCifrado) // Mostramos el texto encriptado en la consola
    return textoCifrado

}



const desencriptarTexto = (texto) => {
    let bytes = CryptoJS.AES.decrypt(texto, key); // Desencriptamos el texto. //* El método AES.decrypt() recibe dos parámetros, el texto a desencriptar y la clave de encriptación
    let textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8); // Convertimos el texto desencriptado a UTF-8
    console.log(bytes) // Mostramos el texto desencriptado en la consola
}



