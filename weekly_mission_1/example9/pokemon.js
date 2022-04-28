/* // pokemon.js
exports.sayHello = (message) => {
    console.log(`sayHello: ${message}`)
}

exports.sayMessage = (message) => {
    console.log(`sayMessage: ${message}`)
} */

class Pokemon{
    constructor(name){
        this.name = name
    }

    sayHello(message){
        console.log(`Mi pokemon ${this.name} ${message}`)
    }

    sayMessage(message){
        console.log(`Mi pokemon ${this.name} dice: ${message}`)
    }
}

module.exports = Pokemon