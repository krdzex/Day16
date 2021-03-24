function firstName(firstName) {
    return firstName.toUpperCase();
}
exports.firstName = firstName;
function lastName(lastName) {
    return lastName.toLowerCase();
}
exports.lastName = lastName;


console.log(firstName("Krsto"));
console.log(lastName("Krsto"));