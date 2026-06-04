import { db } from './firebase.js';

import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
window.saveProduct = async () => {

  const data = {

    title: document.getElementById('title').value,

    subtitle: document.getElementById('subtitle').value,

    price: document.getElementById('price').value,

    oldPrice: document.getElementById('oldPrice').value,

    soldOut:false,

    images:[],

    stats:[
      { icon:"🎮", value:"167", label:"Total Skin" },
      { icon:"⚔️", value:"MAX", label:"Total Hero" },
      { icon:"🏆", value:"MAX", label:"Emblem" }
    ],

    infoAkun:[],

    keterangan:[],

    guarantee:[
      { icon:"📦", label:"Stok Fresh" },
      { icon:"🤝", label:"Siap Rekber" }
    ]
  };

  await addDoc(collection(db,"products"), data);

  alert("Produk berhasil ditambah");

}