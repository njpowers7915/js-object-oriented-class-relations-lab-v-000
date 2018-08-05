let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
}

let passengerId = 0
class Passenger {
  constructor(name, driver) {
    this.id = ++driverId
    this.name = name
    if(driver) {
      this.driverId = driver.id
    }
    store.passengers.push(this)
  }
  setDriver(driver) {
    this.driverId = driver.id
  }
}

class Trip {

}
