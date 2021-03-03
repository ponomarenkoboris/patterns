class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer);
    } 

    unsibscribe(observer) {
        this.observers = this.observers.filter(item => item !== observer);
    }

    emit(action) {
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state
        this.initial = state
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT': 
                this.state = ++this.state
                break
            case 'DECRIMENT': 
                this.state = --this.state
                break
            case 'ADD':
                this.state += action.payload
                break
            default: this.state = this.initial
        }
    }
}

const stream = new Subject();

const obs1 = new Observer()
const obs2 = new Observer(68)

stream.subscribe(obs1)
stream.subscribe(obs2)

stream.emit({ type: 'INCREMENT' })
stream.emit({ type: 'INCREMENT' })
stream.emit({ type: 'DECRIMENT' })
stream.emit({ type: 'ADD', payload: 10 })

console.log(obs1.state)
console.log(obs2.state)