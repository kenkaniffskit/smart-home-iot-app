import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: `${import.meta.env.VITE_API_KEY}`,
	authDomain: `${import.meta.env.VITE_AUTH_DOMAIN}`,
	databaseURL: `https://${
		import.meta.env.VITE_DATABASE_URL
	}.firebasedatabase.app`,
	projectId: `${import.meta.env.VITE_DATABASE_URL}`,
	storageBucket: `${import.meta.env.VITE_STORAGE_BUCKET}`,
	messagingSenderId: `${import.meta.env.VITE_MESSAGING_SENDER_ID}`,
	appId: `${import.meta.env.VITE_APP_ID}`,
	measurementId: `${import.meta.env.VITE_MEASUREMENT_ID}`,
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
