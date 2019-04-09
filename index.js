// Iteration 1: Names and Input
// Declaro los nombres del driver y el navigator y los saco por consola.
const hacker1 = "Alice"; // driver
const hacker2 = "Bob";   // navigator

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// Comparo longitudes y explico el resultado.
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// 3.1 Imprimo el nombre del driver en mayúsculas separado por espacios.
// Uso un bucle para construirlo manualmente (sin join), tal como pide el lab.
let spacedUpper = "";
for (let i = 0; i < hacker1.length; i++) {
  const ch = hacker1[i].toUpperCase();
  // Añado un espacio entre letras salvo después de la última
  spacedUpper += ch + (i < hacker1.length - 1 ? " " : "");
}
console.log(spacedUpper);

// 3.2 Imprimo el nombre del navigator al revés.
let reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
console.log(reversed);

// 3.3 Orden lexicográfico de los nombres.
// Uso localeCompare para mayor claridad (equivalente a comparar manualmente).
const cmp = hacker1.localeCompare(hacker2);
if (cmp < 0) {
  console.log("The driver's name goes first.");
} else if (cmp > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// ----------------------
// Bonus 1: Lorem ipsum
// ----------------------
// Genero un ejemplo de texto y cuento palabras y ocurrencias de "et" (como palabra).
const longText = `
  Lorem ipsum dolor sit amet, et consectetur adipiscing elit. 
  Sed do eiusmod tempor et incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat et.
`;

// Contar palabras: separo por cualquier bloque de espacios.
let wordCount = 0;
let inWord = false;
for (let i = 0; i < longText.length; i++) {
  const c = longText[i];
  if (!/\s/.test(c)) {
    if (!inWord) {
      wordCount += 1;
      inWord = true;
    }
  } else {
    inWord = false;
  }
}
console.log(`Word count: ${wordCount}`);

// Contar apariciones de "et" como palabra completa (ignorando puntuación y mayúsculas).
// Lo hago sin split ni regex de reemplazo avanzado: recorro carácter a carácter
// y verifico límites de palabra básicos.
let etCount = 0;
const lower = longText.toLowerCase();
for (let i = 0; i < lower.length; i++) {
  // miro si hay "et" empezando en i
  if (lower[i] === "e" && lower[i + 1] === "t") {
    const before = i - 1 >= 0 ? lower[i - 1] : " ";
    const after = i + 2 < lower.length ? lower[i + 2] : " ";
    const isBoundaryBefore = !/[a-z]/.test(before);
    const isBoundaryAfter = !/[a-z]/.test(after);
    if (isBoundaryBefore && isBoundaryAfter) {
      etCount += 1;
    }
  }
}
console.log(`"et" count: ${etCount}`);

// ----------------------
// Bonus 2: Palindrome
// ----------------------
// Normalizo quitando todo lo que no sea alfanumérico y pasando a minúsculas.
// Después comparo extremos con un bucle.
const phraseToCheck = "A man, a plan, a canal, Panama!";
let normalized = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  const ch = phraseToCheck[i].toLowerCase();
  if (/[a-z0-9]/.test(ch)) normalized += ch;
}

let isPalindrome = true;
for (let i = 0, j = normalized.length - 1; i < j; i++, j--) {
  if (normalized[i] !== normalized[j]) {
    isPalindrome = false;
    break;
  }
}
console.log(`Is palindrome? ${isPalindrome}`);
