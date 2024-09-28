// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway' 
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object that copies the original employee properties and adds the new key-value pair
    return {
        ...employee,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}