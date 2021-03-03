class MySum {
    constructor(initial = 43) {
        this.sum = initial
    }
    add(value) {
        this.sum += value
        return this
    }
    remove(value) {
        this.sum -= value
        return this
    }
}
const sum1 = new MySum()
console.log(sum1.add(1).add(45).add(-89).add(5).remove(5).sum)