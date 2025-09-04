"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var firebase_admin_1 = require("firebase-admin");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
if (!process.env.FIREBASE_PRIVATE_KEY || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PROJECT_ID) {
    throw new Error('Faltan variables de conexion a Firebase');
}
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
});
exports.db = firebase_admin_1.default.firestore();
