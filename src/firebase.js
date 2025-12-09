
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCapYuuZCwWYJcJoXSI0DJdzNeR2vZY4KE",
  authDomain: "netflix-clone-9d9df.firebaseapp.com",
  projectId: "netflix-clone-9d9df",
  storageBucket: "netflix-clone-9d9df.firebasestorage.app",
  messagingSenderId: "63625182981",
  appId: "1:63625182981:web:f9c334632108cca72b416c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email , password);
        const user = res.user;
        await addDoc(collection(db , "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch(error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export{auth , db , login , signup, logout};