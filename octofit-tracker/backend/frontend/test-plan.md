# Test Plan for OctoFit Tracker Application

## Objective
To verify the integration between the frontend and backend of the OctoFit Tracker application.

## Test Cases

### 1. Verify Frontend Welcome Message
- **Steps**:
  1. Open the frontend application in a browser at `http://localhost:3000/`.
  2. Check if the welcome message "Welcome to OctoFit Tracker" is displayed.
- **Expected Result**: The welcome message should be visible.

### 2. Verify User Data Fetching
- **Steps**:
  1. Open the frontend application in a browser at `http://localhost:3000/`.
  2. Check if the list of users fetched from the backend is displayed under the "Users:" section.
- **Expected Result**: The list of users should be displayed.

### 3. Verify Backend API Endpoints
- **Steps**:
  1. Use a tool like Postman or curl to send a GET request to `http://127.0.0.1:8000/api/users/`.
  2. Verify the response contains user data.
- **Expected Result**: The API should return a JSON response with user data.

### 4. Verify Error Handling
- **Steps**:
  1. Stop the backend server.
  2. Refresh the frontend application.
  3. Check if an error message is displayed for the failed API request.
- **Expected Result**: An error message should be displayed in the console or UI.

## Notes
- Ensure both the frontend and backend servers are running before starting the tests.
- Use the browser developer tools to check for any errors in the console.
