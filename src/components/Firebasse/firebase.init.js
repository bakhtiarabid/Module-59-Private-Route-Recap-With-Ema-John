// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
   initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* Steps for authentication
------------------------------
Step-1 : Initial Setup

1. Firebase: Create project
2. create web app
3. get configuration
4. Initialize firebase
5. Enable auth method
-------------------------------

Step-2: Setup Component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

------------------------------------

Step-3: Set Auth System
1. Set up Sign in method
2. setup sign out method
3. user state
4. special observer
5. retun necessary methods and states from useFirebase

----------------------------------------
speacially for context use purpose

Step: 4: Create Auth Context hook (useAuth)
1. create a auth context
2. Create context provider
3. set context Provider context value
4. use Auth Provider
5. create useAuth Hook
--------------------------------------------

Step 5: Create Private Route
1. Create private Route
2. set private route

*/
