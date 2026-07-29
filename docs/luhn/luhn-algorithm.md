# Luhn Algorithm

## 1. Overview

The **Luhn Algorithm**, also known as the **Mod-10 algorithm**, is a checksum algorithm used to validate whether a sequence of digits is structurally valid.

It is commonly used for:

- Credit and debit card numbers
- Identification numbers
- Account numbers
- Other numeric identifiers

The Luhn Algorithm **does not verify that a number actually exists or is active**. It only checks whether the number passes the checksum calculation.

---

## 2. How the Algorithm Works

Given a number:

```text
79927398713
```

The algorithm processes the digits from **right to left**.

### Step 1: Reverse the digits

```text
Original:
7 9 9 2 7 3 9 8 7 1 3

Reversed:
3 1 7 8 9 3 7 2 9 9 7
```

### Step 2: Double every second digit

Starting from the rightmost digit, double every second digit.

```text
3 1 7 8 9 3 7 2 9 9 7
  ↑   ↑   ↑   ↑   ↑
  ×2  ×2  ×2  ×2  ×2
```

The result is:

```text
3 2 7 16 9 6 7 4 9 18 7
```

### Step 3: Reduce values greater than 9

If a doubled value is greater than 9, subtract 9.

```text
16 → 16 - 9 = 7
18 → 18 - 9 = 9
```

So:

```text
3 2 7 7 9 6 7 4 9 9 7
```

### Step 4: Calculate the total

```text
3 + 2 + 7 + 7 + 9 + 6 + 7 + 4 + 9 + 9 + 7 = 70
```

### Step 5: Check modulo 10

```text
70 % 10 = 0
```

If the remainder is `0`, the number is valid according to the Luhn checksum.

```text
79927398713 → VALID
```

---

## 3. JavaScript Implementation

```js
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
```

### Example

```js
console.log(isValidLuhn("79927398713"));
// true

console.log(isValidLuhn("79927398714"));
// false
```

---

## 4. Python Implementation

```python
def is_valid_luhn(number: str) -> bool:
    if not isinstance(number, str):
        return False

    number = number.strip()

    if not number or not number.isdigit():
        return False

    digits = [int(digit) for digit in number[::-1]]

    total = 0

    for i, digit in enumerate(digits):
        if i % 2 == 1:
            digit *= 2

            if digit > 9:
                digit -= 9

        total += digit

    return total % 10 == 0
```

### Example

```python
print(is_valid_luhn("79927398713"))
# True

print(is_valid_luhn("79927398714"))
# False
```

---

## 5. Input Validation

A production implementation should validate the input before running the algorithm.

### Check the type

JavaScript:

```js
if (typeof number !== "string") {
  return false;
}
```

Python:

```python
if not isinstance(number, str):
    return False
```

This is useful because type hints do not automatically enforce types at runtime.

### Remove leading and trailing whitespace

JavaScript:

```js
number = number.trim();
```

Python:

```python
number = number.strip()
```

For example:

```text
" 79927398713 "
```

becomes:

```text
"79927398713"
```

### Check that the value contains only digits

JavaScript:

```js
/^\d+$/.test(number)
```

Python:

```python
number.isdigit()
```

This prevents invalid input such as:

```text
7992-7398-713
abc
7992 7398 713
```

---

## 6. Important Details

### Luhn does not validate whether a card exists

A number passing Luhn only means:

```text
The checksum is mathematically valid.
```

It does **not** mean:

```text
The card exists.
The card is active.
The card has sufficient funds.
The card is not blocked.
The card belongs to a specific person.
```

Additional verification is required for those cases.

### Luhn does not require a fixed length

The Luhn algorithm itself does not define a specific length.

If validating a specific identifier, length and format rules should be handled separately.

For example:

```text
1. Validate type
2. Trim input
3. Validate format
4. Validate length
5. Run Luhn checksum
```

---

## 7. Complexity

Let `n` be the number of digits.

### Time Complexity

```text
O(n)
```

Each digit is processed once.

### Space Complexity

The implementation above uses a reversed digit array:

```text
O(n)
```

A streaming implementation can reduce auxiliary space to:

```text
O(1)
```

---

## 8. Algorithm Summary

```text
Input number
     ↓
Validate input
     ↓
Reverse digits
     ↓
Double every second digit
     ↓
If digit > 9, subtract 9
     ↓
Sum all digits
     ↓
sum % 10 === 0 ?
     ↓
  Yes → Valid
  No  → Invalid
```

---

## 9. Quick Reference

| Step | Operation |
|---|---|
| 1 | Start from the right |
| 2 | Reverse the digits |
| 3 | Double every second digit |
| 4 | If result > 9, subtract 9 |
| 5 | Sum all digits |
| 6 | Check `sum % 10 === 0` |
| 7 | `0` means valid checksum |

---

## 10. Example

For:

```text
79927398713
```

The final calculation is:

```text
3 + 2 + 7 + 7 + 9 + 6 + 7 + 4 + 9 + 9 + 7 = 70

70 % 10 = 0
```

Therefore:

```text
79927398713 → VALID
```

For:

```text
79927398714
```

the checksum is not divisible by `10`, so:

```text
79927398714 → INVALID
```
