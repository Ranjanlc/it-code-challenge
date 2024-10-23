# Alumni Search Directory

This project is a web application built using **Next.js** for the frontend and **Express.js** for the backend. **MongoDB** is used as the database to store and retrieve data. The application enables searching through alumni information based on specific keywords.

## Tech Stack

- **Frontend**: Next.js (React-based framework)
- **Backend**: Express.js (Node.js framework)
- **Database**: MongoDB

## Project Setup

Follow the steps below to run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/prebuilt-installer/current) installed on your machine.

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ranjanlc/it-code-challenge.git
   cd it-code-challenge
   ```
2. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```

- Create a .env file in the backend directory and paste the variables submitted in the form:

- Start the server
  ```bash
  npm run start
  ```

2. **Install frontend dependencies**:
   ```bash
   cd ..
   cd frontend
   npm install
   ```

- Create a .env file in the frontend directory and paste the variables submitted in the form:

- Start the application
  ```bash
  npm run dev
  ```

### Access the Application

- The frontend will be running at [http://localhost:3000](http://localhost:3000).
- The backend (API) will be running at [http://localhost:4000](http://localhost:4000)

### Admin login credentials

The email and password is provided in .env submission as **ADMIN_PW** and **ADMIN_EMAIL**.

### MongoDB

I had altered the format of data from xlsx to json and then imported into a Mongodb cluster. The structure of data is almost similar to the provided one except some changes for enhancing data integrity(such as removing first_name and last_name while name is present).

The project uses MongoDB for storing alumni data. If you want to see the structure of data, you can download MongoDB compass for your pc and connect to the DB using **MONGO_URI** provided in .env submission.

### Note

The project will function as expected with the provided dataset. Any future changes to the dataset will still be handled by the solution.
