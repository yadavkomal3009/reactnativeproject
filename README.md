This is a mobile application built with React Native and Firebase. It includes authentication, API integration, and infinite scrolling.

✨ Features
✅ Firebase Authentication (Login & Registration)
✅ API Integration (Listing & Details Pages)
✅ Infinite Scrolling
✅ React Navigation
✅ Optional Language Settings

📂 Project Structure
bash
Copy
Edit
/react-native-assignment
│── /assets          # Static assets (images, fonts)
│── /screens         # App screens (Login, Register, Listing, Details)
│── /components      # Reusable components
│── /hooks           # Custom hooks
│── /utils           # Helper functions
│── firebase.js      # Firebase config
│── App.js           # Entry point
│── package.json     # Dependencies
│── README.md        # Documentation
🔧 Setup & Installation
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/yadavkomal3009/reactnativeproject.git
cd react-native-assignment
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Configure Firebase
Create a Firebase project at Firebase Console.
Add a Firebase Web App and get the Firebase config.
Replace the contents of firebase.js with your Firebase credentials.
4️⃣ Run the Project
Start Metro bundler:
sh
Copy
Edit
npx expo start
Run on Android:
sh
Copy
Edit
npx expo start --android
Run on iOS (Mac only):
sh
Copy
Edit
npx expo start --ios

🛠 Technologies Used
React Native - UI framework
Expo - Simplified development
Firebase - Authentication & backend
React Navigation - App navigation
Axios - API requests
🤝 Contributing
Feel free to contribute by creating a Pull Request.

