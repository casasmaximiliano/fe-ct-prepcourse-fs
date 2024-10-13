function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return Math.abs(num).toString().length === 3;
}

module.exports = tieneTresDigitos;
