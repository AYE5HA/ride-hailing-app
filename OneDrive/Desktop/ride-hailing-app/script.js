class RideManager {
  constructor() {
    if (RideManager.instance) {
      return RideManager.instance;
    }

    this.activeRides = [];
    RideManager.instance = this;
  }

  requestRide(userId) {
    const ride = {
      userId,
      rideId: `ride-${Date.now()}`,
      status: 'active'
    };
    this.activeRides.push(ride);
    return ride;
  }

  getActiveRides() {
    return this.activeRides;
  }
}

// Simulate UI interaction
document.getElementById('requestRideBtn').addEventListener('click', () => {
  const rideManager = new RideManager(); // Always returns the same instance
  const ride = rideManager.requestRide('user123');

  document.getElementById('rideStatus').innerText =
    `Ride requested! ID: ${ride.rideId}`;
});