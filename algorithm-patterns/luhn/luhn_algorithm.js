function isValidLuhn(number) {
  if (typeof number !== "string") {
    return false;
  }

  number = number.trim();

  if (!number || !/^\d+$/.test(number)) {
    return false;
  }

  const digits = [...number].reverse().map(Number);

  let total = 0;

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];

    if (i % 2 === 1) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    total += digit;
  }

  return total % 10 === 0;
}

console.log(isValidLuhn("79927398713"));
// true

console.log(isValidLuhn("79927398714"));
// false
