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
const accessLeavingCollectionName = 'accessLeaving';
const slotsCollectionName = 'slots';
const paymentsCollectionName = 'payments';

export const registerVehicle = (newVehicle) =>
  addDoc(collection(db, vehiclesCollectionName), newVehicle);

export const registerUser = (newVehicle) =>
  addDoc(collection(db, usersCollectionName), newVehicle);

export const registerAccesLeaving = (info) =>
  addDoc(collection(db, accessLeavingCollectionName), info);

export const registerPayments = (info) =>
  addDoc(collection(db, paymentsCollectionName), info);

export const getVehicles = () =>
  getDocs(collection(db, vehiclesCollectionName));

export const getUsers = () => getDocs(collection(db, usersCollectionName));

export const getAccessLeaving = () =>
  getDocs(collection(db, accessLeavingCollectionName));

export const getSlots = () => getDocs(collection(db, slotsCollectionName));

export const getPayments = () => getDocs(collection(db, paymentsCollectionName));

export const deleteVehicle = (id) =>
  deleteDoc(doc(db, vehiclesCollectionName, id));

export const deleteUser = (id) => deleteDoc(doc(db, usersCollectionName, id));

export const updateSlot = (id, updatedFields) =>
  updateDoc(doc(db, slotsCollectionName, id), updatedFields);

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
