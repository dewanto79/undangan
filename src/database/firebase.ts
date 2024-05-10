import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { AddMessage } from "./add-message-dto";
import { Message } from "./message.dto";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
});

const db = getFirestore(app);

export { db };

export async function addMessage(payload: AddMessage) {
  if (payload.name && payload.message && payload.imageId) {
    try {
      await addDoc(collection(db, "messages"), {
        name: payload.name,
        message: payload.message,
        isAttending: payload.isAttending,
        imageId: payload.imageId,
        createdAt: Timestamp.now().toDate(),
        updatedAt: Timestamp.now(),
      });
      return true;
    } catch (error) {
      console.log(error);
      throw new Error("Terdapat input yang kurang");
    }
  }
  throw new Error("Ada data yang kosong");
}

export async function getAllMessages() {
  const docRef = await getDocs(
    query(collection(db, "messages"), orderBy("createdAt", "asc"))
  );

  const returned: Message[] = [];
  const objectName: any = {};
  let count = 0;
  docRef.forEach((doc) => {
    if (!objectName[doc.data().name]) {
      objectName[doc.data().name] = true;
      count++;
    }

    return returned.push({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt.toDate().toString(),
      updatedAt: doc.data().updatedAt.toDate().toString(),
    } as Message);
  });

  return { count: count, data: returned };
}
