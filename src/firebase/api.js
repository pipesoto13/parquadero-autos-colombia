import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from './config';

const vehiclesCollectionName = 'vehicles';
const usersCollectionName = 'users';

export const registerVehicle = (newVehicle) =>
  addDoc(collection(db, vehiclesCollectionName), newVehicle);

export const updateWebsite = (id, updatedFields) =>
  updateDoc(doc(db, vehiclesCollectionName, id), updatedFields);

export const onGetLinks = (callback) => {
  const unsub = onSnapshot(collection(db, vehiclesCollectionName), callback);
  return unsub;
};

export const getWebsites = () => getDocs(collection(db, usersCollectionName));

export const deleteWebsite = (id) =>
  deleteDoc(doc(db, usersCollectionName, id));

export const getUser = (userId) => {
  const docs = [];
  const querySnapshot = query(
    collection(db, 'users'),
    where('userId', '==', userId)
  );
  onSnapshot(querySnapshot, (snapshot) => {
    snapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    console.log(docs[0]);
  });
  return docs[0];
};
