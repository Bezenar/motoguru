import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCwtDzQhw7i0vs-9BKIll53AcbV6LM-NgQ",
  authDomain: "mg-test-28411.firebaseapp.com",
  projectId: "mg-test-28411",
  storageBucket: "mg-test-28411.appspot.com",
  messagingSenderId: "43866108823",
  appId: "1:43866108823:web:b6a3e8ced54e5f6f66cad2"
};

const DB = initializeApp(firebaseConfig);

export default DB;