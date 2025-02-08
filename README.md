# MERN Stack XML Credit Report Processor

## Project Overview
This project is a full-stack MERN application that processes XML files containing soft credit pull data from Experian. The system consists of:
- A **backend API** to handle XML file uploads, data extraction, and storage in MongoDB.
- A **React frontend** to display the extracted credit report details in a user-friendly manner.

## Features
1. **XML Upload Endpoint:**
   - Accepts XML file uploads.
   - Validates file format and handles errors.
2. **Data Extraction & Persistence:**
   - Extracts key credit report details such as Name, PAN, Credit Score, Accounts Summary, etc.
   - Stores the extracted data in MongoDB using a well-structured schema.
3. **Reporting Frontend:**
   - Displays extracted credit report details in sections: Basic Details, Report Summary, and Credit Accounts Information.
   - Responsive and visually appealing UI.

## Tech Stack
- **Backend:** Node.js, Express, Multer (for file uploads), xml2js (for XML parsing), MongoDB, Mongoose
- **Frontend:** React, Tailwind CSS, Axios
- **Database:** MongoDB Atlas (or local MongoDB instance)

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- MongoDB (local or MongoDB Atlas)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Upload XML File
**POST** `/api/upload`
- Accepts an XML file for processing.

### Retrieve Report Data
**GET** `/api/reports`
- Fetches processed credit report details.



## Demo Video
[Insert demo video link here]

## Repository Link
[Insert GitHub repository link here]

## License
This project is licensed under the MIT License.

