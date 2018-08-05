let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers(){
    let driverTrips = this.trips()
    let driverPassengers = []
    driverTrips.forEach(function(trip) {
      driverPassengers.push(trip.passenger);
    })
    return driverPassengers;
  }

}

let passengerId = 0
class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  passengers(){
    let passengerTrips = this.trips()
    let passengerDrivers = []
    driverTrips.forEach(function(trip) {
      passengerDrivers.push(trip.passenger);
    })
    return passengerDrivers;
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  setDriver(driver, passenger) {
    this.driverId = driver.id
    this.driver.passengers.push(store.drivers.find(driver => {
      return driver.id === this.driverId
    }))
  }

  setPassenger(driver, passenger) {
    this.passengerId = passenger.id
    this.passenger.drivers.push(store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    }))
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }

  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }
}
