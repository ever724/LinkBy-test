function getFibonaaci(N){
  let n1 = 0, n2 = 1, nextTerm;
  if (N == 1) return n1;
  if (N == 2) return n2;

  nextTerm = n1 + n2;
  while (N > 3) {
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
    N--;
  }
  return nextTerm;
}

console.log(getFibonaaci(8));