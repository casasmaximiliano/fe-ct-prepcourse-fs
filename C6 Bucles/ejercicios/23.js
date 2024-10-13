function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero === 2) {
    return true;
  }

  if (numero <= 1) {
    return false;
  }

  const raiz = Math.sqrt(numero);
  let i = 2;
  do {
    if (numero % i === 0) {
      return false;
    }
    i++;
  }

  while (i <= raiz);
  return true;
}

module.exports = esNumeroPrimo;
