import admin, { credential } from 'firebase-admin';
import applicationDefault = credential.applicationDefault;

admin.initializeApp({
	credential: applicationDefault(),
	// eslint-disable-next-line @typescript-eslint/naming-convention
	databaseURL: process.env.FIREBASE_DATABASE_URL,
});
