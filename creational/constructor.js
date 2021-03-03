// function Server(name, ip) {
//     this.name = name
//     this.id = ip
// }

// Server.prototype.getUrl = function () {
//     return `https://${this.ip}`
// }

// const aws = new Server('AWS', '34.34.34.34');

// console.log(aws.getUrl())

class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }
    getUrl() {
        return `https://${this.ip}` 
    }
}

const aws = new Server('AWS', '78.34.34.34');
console.log(aws.getUrl())
