export function isValidUsername(input) {
    const regex = /^[A-Za-z0-9]{3,20}$/;
    return regex.test(input);
}
