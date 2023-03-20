import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

// functions

export const fetchCategoryName = async () => {
  const categoryCollectionRef = collection(db, "categoryName");
  const data = await getDocs(categoryCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const fetchSpecificCategoryImage = async ({ category }) => {
  const categoryCollectionRef = collection(db, "categoryImages");
  const data = await getDocs(categoryCollectionRef);
  const allImages = data.docs.map((doc) => doc.data());
  let requiredImages = [];
  for (let img of allImages) {
    if (img.category === category) {
      requiredImages = img.url;
      break;
    }
  }
  return requiredImages;
};

export const fetchAllCategoryImages = async () => {
  const categoryCollectionRef = collection(db, "categoryImages");
  const data = await getDocs(categoryCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
