import {
    getFirestore,
    getDocs,
    collection,
    getDoc,
    where,
    doc,
} from "firebase/firestore";

const getCategories = async () => {
    try {
        const db = getFirestore();
        const categories = await getDocs(collection(db, "Categories"));
        categories.forEach((docs) => console.log(docs.id, docs.data()));
        return categories.docs;
    } catch (error) {
        console.log(error);
    }
};

export { getCategories };
