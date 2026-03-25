# Dhaneshwari Hotel — Backend API

REST API backend for Dhaneshwari Hotel, Varanasi. Built with Node.js, Express, and MongoDB.

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- dotenv

## Features
- Room management with inventory tracking
- Booking system with auto inventory reduction
- Admin authentication with JWT
- Contact form API
- Slider & testimonials management

## Room Inventory
| Room Type   | Total Rooms |
|-------------|-------------|
| Double Bed  | 10          |
| Triple Bed  | 3           |
| Four Bed    | 1           |

## API Endpoints

### Rooms
- `GET /api/rooms` — Get all rooms with availability
- `POST /api/rooms` — Add a room
- `PUT /api/rooms/:id` — Update room (admin can update inventory)
- `DELETE /api/rooms/:id` — Delete a room

### Bookings
- `POST /api/bookings` — Create booking (auto reduces inventory)
- `GET /api/bookings` — Get all bookings
- `POST /api/bookings/check-availability` — Check room availability

### Admin
- `POST /api/admin/login` — Admin login (returns JWT)

### Contact
- `POST /api/contact` — Submit contact form
- `GET /api/contact` — Get all messages

### Slider
- `GET /api/slider` — Get slider images
- `POST /api/slider` — Add slider image
- `DELETE /api/slider/:id` — Delete slider image

### Testimonials
- `GET /api/testimonials` — Get testimonials
- `POST /api/testimonials` — Add testimonial
- `DELETE /api/testimonials/:id` — Delete testimonial

## Setup
1. Clone the repo
2. `cd backend && npm install`
3. Create `.env` file with `MONGO_URI` and `JWT_SECRET`
4. `npm run dev`
