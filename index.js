let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  passengers(){
    return store.passengers.filter(passenger => {
      return passenger.driverId === this.id
    })
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
}

let passengerId = 0
class Passenger {
  constructor(name, driver) {
    this.id = ++passengerId
    this.name = name
    if(driver) {
      this.driverId = driver.id
    }
    store.passengers.push(this)
  }
  setDriver(driver) {
    this.driverId = driver.id
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers(){
    return store.drivers.filter(driver => {
      return driver.passengerId === this.id
    })
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if(driver) {
      this.driverId = driver.id
    }
    if(passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }
  setDriver(driver) {
    this.driverId = driver.id
  }
  setPassenger(passenger) {
    this.passengerId = passenger.id
  }

  driver(){
    return store.users.find(function(user){
      return user.id === this.userId
    })
}
