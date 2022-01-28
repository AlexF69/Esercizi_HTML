function sumUntil(maxValue) {
  // uso loop do-while...
  let somma = 0;
  let i = 1;
  do {
    somma = somma + i;
    i++;
    // console.log(somma);
  } while (i <= maxValue);
  return somma;
}

console.log(sumUntil(5));
