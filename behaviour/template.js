class Employ {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} выполняет ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} имеет ЗП ${this.salary}`
    }
}

class Developer extends Employ {
    constructor(name, salary) {
        super(name, salary);
    }
    responsibilities() {
        return `Процесс создания программ`
    }
}
class Tester extends Employ {
    constructor(name, salary) {
        super(name, salary);
    }
    responsibilities() {
        return `Процесс тестирования`
    }
}

const dev = new Developer('Boris', 10000);
const test = new Tester('Tom', 5000);

console.log(dev.getPaid())
console.log(dev.work())
console.log(test.getPaid())
console.log(test.work())