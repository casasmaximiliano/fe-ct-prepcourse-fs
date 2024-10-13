function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma = 0;

  let inicio = Math.min(0, n);
  let fin = Math.max(0, n);

  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }
  return suma;
}

module.exports = sumarHastaN;
