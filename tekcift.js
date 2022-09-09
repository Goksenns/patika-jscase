function tekmiciftmi(sayi) {
  let sum = 0;

  while (sayi) {
    sum += sayi % 10;
    sayi = Math.floor(sayi / 10);
  }
  if (sum % 2 == 0) {
    console.log("even");
    return "even";
  } else {
    console.log("odd");
    return "odd";
  }
}
tekmiciftmi(43);
tekmiciftmi(557);
tekmiciftmi(763);
tekmiciftmi(6984);
