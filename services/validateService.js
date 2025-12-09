export function isValidUsername(input) {
    const regex = /^([A-Za-z0-9]+)+$/;

    return regex.test(input);
}
