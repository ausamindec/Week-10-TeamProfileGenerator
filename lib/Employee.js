class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    fetch_name() {
        return this.name
    }

    fetch_ID() {
        return this.id
    }

    fetch_email() {
        return this.email
    }

    fetch_role() {
        return 'Employee'
    }
}

module.exports = Employee;