function produit_egal_50(a, b) {
  let produit = a * b;
  while (produit !== 50) {
    if (produit > 50) {
      b--;
    } else {
      a++;
    }
    produit = a * b;
  }
  return produit;
}
console.log(produit_egal_50(5, 10));
