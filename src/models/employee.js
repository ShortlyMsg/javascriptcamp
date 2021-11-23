import User from "./user.js"

export default class Employee extends User{
    constructor(id, firstName, lastNamei, city, age, salary) {
        super(id, firstName, lastNamei, city, age)
        this.salary = salary
    }
}