"https://github.com/user-attachments/assets/906a96b5-b87b-4329-985d-0fae98a42d5d"

# Full-Stack Recipe Finder Application

This is a full-stack web application designed to help users browse and search for recipes. The frontend is built with **React.js** and **Material-UI**, and the backend is a robust REST API powered by **Spring Boot** and **MongoDB**.


## ✨ Features

* **Interactive Data Grid:** Displays over 8,400 recipes in a clean, paginated, and sortable table.
* **Detailed Recipe View:** Click on any recipe to open a side drawer with complete details, including nutrition facts, ingredients, and step-by-step instructions.
* **Dynamic Data Loading:** The application starts by automatically seeding the MongoDB database from a provided `JSON` file.
* **RESTful Backend:** A well-structured API to serve recipe data efficiently to the frontend.
* **Modern UI:** A responsive and user-friendly interface built with Material-UI components.

---

## 🛠️ Technology Stack

### Frontend
* **React.js:** For building the user interface.
* **Material-UI (MUI):** For a rich set of UI components and a pre-built Data Grid.
* **Axios:** For making HTTP requests to the backend API.

### Backend
* **Spring Boot:** For creating the REST API.
* **Java:** The core programming language.
* **MongoDB:** NoSQL database to store the recipe data.
* **Maven:** For project build and dependency management.

---

## 📁 Project Structure

The repository is organized into two main folders:

* **`/frontend`**: Contains the complete React.js application.
* **`/recipe-backend`**: Contains the complete Spring Boot application.

---

## ⚙️ Local Setup and Installation

To run this project on your local machine, please follow the steps below.

### Prerequisites
* **Node.js** (v16 or later)
* **Java** (JDK 17 or later)
* **Apache Maven**
* **MongoDB** (running on `localhost:27017`)

### 1. Backend Setup
First, set up and run the backend server.

```bash
# 1. Clone the repository
git clone [Your GitHub Repository URL]
cd recipe-fullstack-app/recipe-backend

# 2. Place the US_recipes.json file inside the src/main/resources/ folder.

# 3. Ensure your MongoDB connection string in application.properties is correct.
# It should be: spring.data.mongodb.uri=mongodb://localhost:27017/recipesdb

# 4. Run the Spring Boot application
mvn spring-boot:run
he server will start on http://localhost:8080. On the first run, it will automatically populate the recipesdb database with data from the JSON file.

. Frontend Setup
Now, set up and run the React frontend in a separate terminal.

Bash

# 1. Navigate to the frontend directory
cd ../frontend  # (From the recipe-backend directory)

# 2. Install all the required dependencies
npm install

# 3. Start the React development server
npm start
The application will open automatically in your browser at http://localhost:3000.

🔌 API Endpoint
The backend provides the following endpoint to fetch all recipes:

Method	Endpoint	Description
GET	/api/recipes	Fetches all recipes from the database.

