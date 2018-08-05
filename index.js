
let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
  }
}
