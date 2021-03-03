class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    recieve(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.recieve(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].recieve(message, from)
                }
            })
        }
    }
}

const boris = new User('Boris');
const anna = new User('Anna');
const elena = new User('Elena');

const room = new ChatRoom();

room.register(boris);
room.register(anna);
room.register(elena);

elena.send('hellow', anna);