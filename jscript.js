function sumar(a, b) {
  return a + b;
}

var y = 0;
for (var x = 1; x <= 100; x++) {
  y = y + x;
}

alert(y);

y = 0;
x = 1;
while (x <= 100) {
  y = y + x;
  console.log(y);
  x++;
}

alert(y);
