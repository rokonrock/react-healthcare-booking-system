
# Healthcare Appointment Booking System

A modern web-based **Healthcare Appointment Booking System** that allows patients to book appointments with doctors. Built with **React (Vite), Node.js, Express, MongoDB (or PostgreSQL), and Tailwind CSS**.


## Architectural Diagram



![screenshot](https://raw.githubusercontent.com/rokonrock/react-healthcare-booking-system/refs/heads/master/frontend/public/Healthcare_Management.png)


## Tech Stack

**Client:** React, Vite, TailwindCSS

**Server:** Node, Express

## 


| Layer          | Technology Used             |
|---------------|---------------------------|
| Frontend      | React (Vite), Tailwind CSS, React Router |
| Backend       | Node.js, Express.js, JWT Authentication |
| Database      | MongoDB (Mongoose) / PostgreSQL (Sequelize) |
| Authentication | JWT, bcrypt.js |
| Deployment    | Vercel (Frontend), Render/EC2 (Backend), MongoDB Atlas/PostgreSQL |
| Notifications | Firebase Cloud Messaging, Twilio |
| Payment Integration | Stripe |


## Features


✅ User Authentication (JWT)  
✅ Browse & Search Doctors  
✅ Appointment Booking System  
✅ Payment Integration (Stripe)  
✅ Email & SMS Notifications  
✅ Doctor Dashboard & Availability Management  


## Folder Structure

```bash

healthcare-booking-system/
│
├── backend/                         # Backend folder (Express & MongoDB)
│   ├── models/                      # Mongoose models
│   │   ├── User.js                   # User authentication model
│   │   ├── Doctor.js                 # Doctor model
│   │   ├── Booking.js                # Booking model
│   │
│   ├── routes/                      # API routes
│   │   ├── auth.js                   # Authentication API
│   │   ├── doctor.js                 # Doctor API
│   │   ├── booking.js                # Booking API
│   │
│   ├── server.js                    # Main server file
│   ├── .env                         # Environment variables
│   ├── config.js                    # Database connection setup
│   ├── package.json                  # Backend dependencies
│
├── frontend/                        # Frontend folder (Vite + React)
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/               # React components
│   │   │   ├── DoctorList.jsx        # Displays doctor list
│   │   │   ├── AppointmentForm.jsx   # Appointment booking form
│   │   │   ├── LoginForm.jsx         # User login form
│   │   │   ├── RegisterForm.jsx      # User registration form
│   │   │   ├── Dashboard.jsx         # Dashboard for patients/doctors
│   │   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── context/                  # Context API for authentication
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx                    # Main component
│   │   ├── main.jsx                   # React entry point
│   │   └── tailwind.config.js         # Tailwind CSS configuration
│   │
│   ├── package.json                   # Frontend dependencies
│   ├── vite.config.js                  # Vite configuration
│
├── package.json                        # Root package file
└── README.md                           # Project overview


```


## 🛠 Installation & Setup

### Clone the Repository
```sh
mkdir healthcare-appointment

git clone https://github.com/rokonrock/react-healthcare-booking-system.git

cd healthcare-appointment
```


## Features

- ### Frontend

```sh
cd frontend
npm install
npm run dev
```

- ### Backend

```sh
cd frontend
npm install
npm run dev
```


## API Endpoints

| Endpoint           | Method             | Description          |
|--------------------|--------------------|----------------------|
| `/api/auth/login`    | POST | Login User |
| `/api/auth/signup`   | POST | Register User |
| `/api/doctors`       | GET  | Get List of Doctors |
| `/api/appointments`  | POST | Book an Appointment |
| `/api/payments`      | POST | Handle Stripe Payment |


## Authors

- [@rokonrock](https://github.com/rokonrock/)


