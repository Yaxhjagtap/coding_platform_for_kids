import { initializeApp } from "firebase/app";
// Analytics is OPTIONAL – safe to remove in hackathons
// import { getAnalytics } from "firebase/analytics";


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// ❌ Optional – remove to avoid SSR / localhost issues
// export const analytics = getAnalytics(app);
