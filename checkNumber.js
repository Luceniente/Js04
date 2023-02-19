function evaluationNombre(nombre) {
    if (nombre < 5) {
      console.log("faible");
    } else if (nombre === 5 || nombre === 6 || nombre === 7) {
      console.log("moyen");
    } else {
      // ne fait rien si nombre > 8
    }
  }
  evaluationNombre(3); // affiche "faible"
  evaluationNombre(5); // affiche "moyen"
  evaluationNombre(7); // ne fait rien
