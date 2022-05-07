// signup user
// login user
import { async } from "@firebase/util";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getFirestore, setDoc, getDoc } from "firebase/firestore";

const signup = async (email, password, firstName, lastName) => {
    try {
        const auth = getAuth();
        const { user } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const db = getFirestore();
        await setDoc(doc(db, "Users", user.uid), {
            firstName,
            lastName,
        });
    } catch (error) {
        console.log(error);
    }
};

const login = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
    } catch (error) {
        console.log(error);
    }
};

const getUserData = async () => {
    try {
        const auth = getAuth();
        if (!auth.currentUser) {
            return;
        }
        const uid = auth.currentUser.uid;

        const db = getFirestore();
        const userData = await getDoc(doc(db, "Users", uid));
        console.log(userData.data());
    } catch (error) {
        console.log(error);
    }
};

export { signup, login, getUserData };
