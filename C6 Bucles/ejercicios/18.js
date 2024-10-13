function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;

  let inicio = Math.min(a, b);
  let fin = Math.max(a, b);

  for (let i = inicio; i <= fin; i++) {
    producto *= i;
  }
  return producto === 0 ? 0 : producto;
}

module.exports = productoEntreNúmeros;