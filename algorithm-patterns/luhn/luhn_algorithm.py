def is_valid_luhn(number: str) -> bool:
    """
    Validate a number using the Luhn algorithm.

    Args:
        number: Number to validate.

    Returns:
        True if the number passes the Luhn checksum, otherwise False.
    """
    if not isinstance(number, str):
        return False

    number = number.strip()

    # Must contain only digits
    if not number.isdigit():
        return False

    # Empty string
    if not number:
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


print(is_valid_luhn("79927398713"))
# True

print(is_valid_luhn("79927398714"))
# False
