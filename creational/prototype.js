const car = {
    whils: 4,

    init() {
        console.log(`У машины ${this.whils} колеса, владелец ${this.owner}`)
    }
}

const carOwner = Object.create(car, {
    owner: {
        value: 'Stan'
    }
});

console.log(carOwner.__proto__ === car)

carOwner.init()