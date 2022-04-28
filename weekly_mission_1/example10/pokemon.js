/* class MyPokemon{
    constructor(name){
        this.name = name
    }

    sayHello(message){
        console.log(`Mi pokemon ${this.name} ${message}`)
    }
}

module.exports = new MyPokemon('default') */

// exports a class
export default class MyPokemon {
    constructor (name) {
      this.name = name
    }
  
    sayHello (message) {
      console.log(`[${this.name}] ${message}`)
    }
  }