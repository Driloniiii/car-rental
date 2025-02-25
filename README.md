# CAR Rental API

## Overview

CAR Rental API is a RESTful API built with Node.js, Express.js, and MongoDB to manage car rentals. It provides endpoints for user authentication, car management, and rental operations.

## Features

- **User Authentication**: Register, login, and access profile details.
- **Filtering & Sorting**: Filter cars based on year, color, steering type, and number of seats, sorted by price.
- **Security**: Secure authentication with JWT.
- **MongoDB Integration**: Uses MongoDB for data storage.

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Bcrypt for password hashing

## Installation & Setup

### Prerequisites
Ensure you have the following installed:

- Node.js
- MongoDB
- Postman 


#### Install Dependencies
```sh
npm install
```

#### Set Up Environment Variables
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=your_secret_key
```

#### Start the Server
```sh
node app.js
```

## API Endpoints

### Authentication

| Method | Endpoint            | Description              |
|--------|--------------------|--------------------------|
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/auth/login`    | Login and get a token    |
| GET    | `/api/auth/my-profile`  | Get the logged-in user's profile after providing token|

### 1.Register
![image (2)](https://github.com/user-attachments/assets/14af62a3-8f29-43a5-bbd0-59f4cb6eb7e6)
### 2.Login 
![image (3)](https://github.com/user-attachments/assets/f29225ab-ca32-4cd5-a267-d8a3b2191ad6)
### 3.My-Profile
![image (5)](https://github.com/user-attachments/assets/c7dd6c61-8c7c-4cc0-9b46-46149595016c)
##




### Cars Management

| Method | Endpoint            | Description               |
|--------|--------------------|---------------------------|
| GET    | `/api/rental-cars` | Get Rental cars |
| GET    | `/api/rental-cars?...`| Sort Rental cars |


| Parameter         | Type    | Description |
|--------|--------------------|---------------------------|
| `price_per_day`  | number  | Filter rentals by the daily rental price. |
| `year`           | number  | Filter by the car's manufacturing year. |
| `color`          | string  | Filter by car color (e.g., `black`, `white`). |
| `steering_type`  | string  | Filter by steering type (`automatic` or `manual`). |
| `number_of_seats` | number | Filter by the number of seats in the car. |


### 1.Rental Cars 
![image (6)](https://github.com/user-attachments/assets/1d4aeff9-98b1-48ca-9d60-93e2e0a59bf2)
### 2.Sort Rental Cars 
![image (9)](https://github.com/user-attachments/assets/0cd05c29-5f4f-48bb-b287-0c79444452d6)
![image (10)](https://github.com/user-attachments/assets/352f2ff7-4728-4b2c-a8f3-f1a26d0d93d6)
### Data stored in MongoDb
![image](https://github.com/user-attachments/assets/00a5c640-adbf-47f2-829f-68b6dbbeb3f2)






## 

## Author
Developed by **Drilon Zeqiri**.

