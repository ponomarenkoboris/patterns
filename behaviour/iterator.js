class Iterator { 
    constructor(data) {
        this.index = 0
        this.data = data
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++]
                    }
                } else {
                    this.index = 0
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
}

function* generator(collection) {
    let index = 0

    while(index < collection.length) {
        yield collection[index++]
    }
}

const iter = new Iterator(['this', 'is', 'itterator']);
// for(let value of iter) {
//     console.log('Value: ', value)
// }

const gener = generator(['this', 'is', 'itterator']);
console.log(gener.next().value)
console.log(gener.next().value)
console.log(gener.next().value)