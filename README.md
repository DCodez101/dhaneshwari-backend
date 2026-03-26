# Dhaneshwari Hotel — Backend API

REST API backend for Dhaneshwari Hotel, Varanasi. Built with Node.js, Express, and MongoDB.

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Multer (image uploads)
- bcryptjs
- dotenv

## Features
- Room management with inventory tracking
- Booking system with auto inventory reduction
- Admin authentication with JWT
- User authentication (signup/login)
- Contact form API
- Slider & testimonials management
- Amenities management
- Blog module with full SEO fields
- Date-wise & extra adult pricing
- Promotions & discounts (flat + percentage)
- Reservation filters (date/status/guest)
- Image upload support

## Room Inventory
| Room Type  | Total Rooms | Base Occupancy | Max Occupancy | Price/Night |
|------------|-------------|----------------|---------------|-------------|
| Double Bed | 10          | 2              | 4             | ₹2500       |
| Triple Bed | 3           | 3              | 5             | ₹3500       |
| Four Bed   | 1           | 4              | 6             | ₹5000       |

Extra adult charge: ₹500/adult (applies after base occupancy)

## API Endpoints

### Auth (Users)
- `POST /api/auth/signup` — Register new user
- `POST /api/auth/login` — Login (returns JWT)

### Admin
- `POST /api/admin/login` — Admin login (returns JWT)

### Rooms
- `GET /api/rooms` — Get all rooms with availability
- `GET /api/rooms/:id` — Get single room
- `POST /api/rooms` — Add a room
- `PUT /api/rooms/:id` — Update room
- `DELETE /api/rooms/:id` — Delete a room
- `POST /api/rooms/:id/calculate-price` — Calculate price (dates + adults)

### Bookings
- `GET /api/bookings` — Get all bookings (filters: status, guest, checkIn, checkOut)
- `POST /api/bookings` — Create booking (auto reduces inventory)
- `POST /api/bookings/check-availability` — Check room availability

### Testimonials
- `GET /api/testimonials` — Get all testimonials
- `POST /api/testimonials` — Add testimonial
- `PUT /api/testimonials/:id` — Update testimonial
- `DELETE /api/testimonials/:id` — Delete testimonial
- `POST /api/testimonials/upload-photo` — Upload guest photo

### Amenities
- `GET /api/amenities` — Get all amenities
- `POST /api/amenities` — Add amenity (duplicate check included)
- `PUT /api/amenities/:id` — Update amenity
- `DELETE /api/amenities/:id` — Delete amenity

### Blogs
- `GET /api/blogs` — Get all blogs
- `GET /api/blogs/:slug` — Get blog by slug (SEO-friendly URL)
- `POST /api/blogs` — Create blog post
- `PUT /api/blogs/:id` — Update blog post
- `DELETE /api/blogs/:id` — Delete blog post
- `POST /api/blogs/upload-image` — Upload blog image

### Promotions
- `GET /api/promotions` — Get all promotions
- `POST /api/promotions` — Create promotion
- `PUT /api/promotions/:id` — Update promotion
- `PATCH /api/promotions/:id/toggle` — Activate/deactivate promotion
- `DELETE /api/promotions/:id` — Delete promotion
- `POST /api/promotions/apply` — Apply promotions to a booking amount

### Contact
- `POST /api/contact` — Submit contact form
- `GET /api/contact` — Get all messages

### Slider
- `GET /api/slider` — Get slider images
- `POST /api/slider` — Add slider image
- `DELETE /api/slider/:id` — Delete slider image

## Blog SEO Fields
Each blog post supports: `metaTitle`, `metaDescription`, `metaKeywords`, `slug`, `ogTitle`, `ogDescription`, `ogImage`, `h1`, `h2`, `h3`, `altText`, `isPublished`

## Image Upload
- Testimonial photos → `POST /api/testimonials/upload-photo` (form-data, key: `photo`)
- Blog images → `POST /api/blogs/upload-image` (form-data, key: `image`)
- Supported formats: JPEG, JPG, PNG, WEBP (max 5MB)
- Returns a URL to use in the respective create/update API

## Setup
1. Clone the repo
2. `cd backend && npm install`
3. Create `backend/.env` with:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
4. `npm run dev`

## Note
Image uploads are stored in the `backend/uploads/` folder locally.
For production deployment, migrate to Cloudinary or AWS S3.