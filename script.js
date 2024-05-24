const employeesDB = {};

function createEmployeeRecord(employeeID, name, age, position) {
    if (employeesDB.hasOwnProperty(employeeID)) {
        console.log(`Employee with ID ${employeeID} already exists.`);
        return;
    }
    employeesDB[employeeID] = { name, age, position };
    console.log(`Employee ${name} created successfully.`);
}

function updateEmployeeRecord(employeeID, newDetails) {
    if (!employeesDB.hasOwnProperty(employeeID)) {
        console.log(`Employee with ID ${employeeID} does not exist.`);
        return;
    }
    if (Object.isFrozen(employeesDB[employeeID])) {
        console.log(`Employee with ID ${employeeID} is frozen and cannot be updated.`);
        return;
    }
    Object.assign(employeesDB[employeeID], newDetails);
    console.log(`Employee ${employeeID} updated successfully.`);
}

function displayEmployeeRecord(employeeID) {
    if (!employeesDB.hasOwnProperty(employeeID)) {
        console.log(`Employee with ID ${employeeID} does not exist.`);
        return;
    }
    console.log(employeesDB[employeeID]);
}

function freezeEmployeeRecord(employeeID) {
    if (!employeesDB.hasOwnProperty(employeeID)) {
        console.log(`Employee with ID ${employeeID} does not exist.`);
        return;
    }
    Object.freeze(employeesDB[employeeID]);
    console.log(`Employee ${employeeID} has been frozen.`);
}

function displayEmployeesList() {
    for (const employeeID in employeesDB) {
        console.log(`ID: ${employeeID}, Details: `, employeesDB[employeeID]);
    }
}


createEmployeeRecord(1, "John Doe", 30, "Developer");
createEmployeeRecord(2, "Jane Smith", 25, "Designer");
displayEmployeeRecord(1);
updateEmployeeRecord(1, { age: 31 });
freezeEmployeeRecord(1);
updateEmployeeRecord(1, { age: 32 });
displayEmployeesList();
