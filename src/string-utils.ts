function obtenerPrimeraLetra(texto) {
    if (texto && texto.length > 0) {
        return texto[0];
    } else {
        throw new Error("La cadena está vacía o es nula.");
    }
}