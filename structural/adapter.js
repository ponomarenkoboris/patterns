class OldCulc {
    operations(t1, t2, operation) {
        switch(operation) {
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }
    }
}

class NewCulc {
    add (t1, t2) {
        return t1 + t2
    }
    sub (t1, t2) {
        return t1 - t2
    }
}

class CulcAdapter {
    constructor() {
        this.culc = new NewCulc();
    }
    operations(t1, t2, operation) {
        switch(operation) {
            case 'add': return this.culc.add(t1, t2)
            case 'sub': return this.culc.sub(t1, t2)
            default: return NaN
        }
    }
}
const oldCulc = new OldCulc();
console.log(oldCulc.operations(10, 15, 'add'))

const newCulc = new NewCulc();
console.log(newCulc.add(10, 15))

const adapter = new CulcAdapter();
console.log(adapter.operations(10, 15, 'add'));