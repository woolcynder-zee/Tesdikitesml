import { db } from './firebase.js';

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.saveProduct = async () => {

  await addDoc(collection(db,"products"),{

    title:"TEST",
    price:"100k"

  });

  alert("Berhasil");

}
