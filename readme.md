User Schema

{
  name: String,
  email: { type: String, unique: true },
  password: String,
  isActive: { type: Boolean, default: true },
}
Property Schema

{
  name: Enum,
  address: String,
  price: Number,
  isActive: { type: Boolean, default: true }
}
Booking Schema

{
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  startDate: Date,
  endDate: Date,
  totalPrice: Number,
  isActive: { type: Boolean, default: true }
}



APIs
User Management
POST /users - Create a new user.
GET /users - Get a list of all users.
GET /users/:id - Get user by ID.

Property Management
POST /properties - Create a new property.
GET /properties - Get a list of all properties.
GET /properties/:id - Get property by ID.

Booking Management
POST /bookings - Create a new booking.
GET /bookings - Get a list of all bookings.
GET /bookings/:id - Get booking by ID.

User's Bookings
GET /users/:userId/bookings - Get all bookings of a user by userId.


User Management - 
Create User Schema
Implement User APIs
Property Management

Create Property Schema
Implement Property APIs
Booking Management

Create Booking Schema
Implement Booking APIs
User's Bookings

Implement API to get all bookings of a user by userId.
User's Active Bookings

Implement API to get all active bookings of a user by userId.
Feel free to adjust the formatting as needed.






