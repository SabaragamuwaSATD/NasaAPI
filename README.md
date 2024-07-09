NASA API React Application

This is a NASA API React application hosted on Netlify with Firebase authentication. Users can register, log in, and explore NASA's astronomy picture of the day.
Getting Started

To get started with the project, follow these steps:
Prerequisites

Make sure you have the following installed:

    Node.js
    npm (Node Package Manager)
    Git

Installation

1. Clone the repository to your local machine:
    git clone https://github.com/your-username/nasa-api-react.git
   
2. Navigate to the project directory:
   cd nasa-api-react

3. Install the dependencies:
   npm install

Configuration

    1.Create a Firebase project at Firebase Console.
    2.Enable Email/Password authentication in Firebase.
    3.Copy your Firebase project configuration (you can find this in the Firebase console under Project Settings > General > Your apps > Firebase SDK snippet).
    4.Paste the Firebase config object into src/firebase/firebaseConfig.js:

  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  export default firebaseConfig;

Running the Application

  1.Start the development server:
      npm start
  2.Open your browser and navigate to http://localhost:3000 to see the application running.

Usage

  Login: Visit https://nasaapitharindu.netlify.app/login to log in using the sample credentials:
        Email: admin@tharindu.dev
        Password: 123456
    Register: If you don't have an account, click on "Register" on the login page to create a new account.

Deployment

  The application is deployed on Netlify and can be accessed at https://nasaapitharindu.netlify.app.

Contributing

  Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

License

  This project is licensed under the MIT License - see the LICENSE.md file for details.

Testing
    Tested by using selenium



