class myMath {
    constructor(initial = 0) {
        this.num = initial
    }

    square() {
        return this.num ** 2
    }

    cube() {
        return this.num ** 3
    }
} 
class Command {
    constructor(subject) {
        this.subject = subject
        this.commandExecude = []
    }

    execute(command) {
        this.commandExecude.push(command);
        return this.subject[command]()
    }
}

const y = new Command(new myMath(2));
console.log(y.execute('square'));
console.log(y.execute('cube'));

console.log(y.commandExecude)