import { firebaseApp } from "./firebase";
import * as firebase from "firebase";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export const getColletion = async (colletion) => {
  const result = { statusReponse: false, data: null, error: null };
  try {
    const data = await db.collection(colletion).get();
    const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    result.statusReponse = true;
    result.data = arrayData;
  } catch (error) {
    result.error = error;
  }

  return result;
};

export const addDocument = async (collection, data) => {
  const result = { statusReponse: false, data: null, error: null };
  try {
    const response = await db.collection(collection).add(data);
    result.data = { id: response.id };
    result.statusReponse = true;
  } catch (error) {
    result.error = error;
  }

  return result;
};

export const getDocument = async (collection, id) => {
  const result = { statusReponse: false, data: null, error: null };
  try {
    const response = await db.collection(collection).doc(id).get();
    result.data = { id: response.id, ...response.data() };
    result.statusReponse = true;
  } catch (error) {
    result.error = error;
  }

  return result;
};

export const updateDocument = async (collection, id, data) => {
  const result = { statusReponse: false, error: null };
  try {
    await db.collection(collection).doc(id).update(data);
    result.statusReponse = true;
  } catch (error) {
    result.error = error;
  }

  return result;
};

export const deleteDocument = async (collection, id) => {
  const result = { statusReponse: false, error: null };
  try {
    await db.collection(collection).doc(id).delete();
    result.statusReponse = true;
  } catch (error) {
    result.error = error;
  }

  return result;
};
