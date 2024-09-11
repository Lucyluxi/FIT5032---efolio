/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const { getAuth } = require("firebase-admin/auth");

const admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
 });

const auth = admin.auth();

auth.setCustomUserClaims('uzwt2mmbpjVGKO2TR788o2d7Mz53', { admin: true, editor: false })
  .then(() => {
    console.log("Custom claims set successfully");
  })
  .catch((error) => {
    console.error("Error setting custom claims:", error);
  });

