class Ligth {
    constructor(light) {
        this.light = light
    }
}

class RedLight extends Ligth {
    constructor() {
        super('red');
    }

    sign() {
        return 'STOP'
    }
}
class YellowLight extends Ligth {
    constructor() {
        super('yellow');
    }

    sign() {
        return 'READY'
    }
}
class GreenLight extends Ligth {
    constructor() {
        super('green');
    }

    sign() {
        return 'GO'
    }
}

class TraficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ]
        this.current = this.states[0]
    }

    change() {
        const total = this.states.length;
        let index = this.states.findIndex(item => item === this.current);

        if(index + 1 < total) {
            this.current = this.states[index + 1];
        } else {
            this.current = this.states[0]
        }
    }

    sign() {
        return this.current.sign()
    }
}

const traf = new TraficLight();

console.log(traf.sign())
traf.change()
console.log(traf.sign())
traf.change()
console.log(traf.sign())