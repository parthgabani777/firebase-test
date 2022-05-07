import {
    getDatabase,
    ref,
    get,
    child,
    set,
    push,
    query,
} from "firebase/database";
import {
    getFirestore,
    getDocs,
    collection,
    getDoc,
    where,
    doc,
} from "firebase/firestore";

const categories = [
    {
        categoryName: "Javascript",
    },
    {
        categoryName: "React",
    },
    {
        categoryName: "HTML and CSS",
    },
    {
        categoryName: "Node.js",
    },
];

const addCategoies = () => {};

const getCategories = async () => {
    // const db = getFirestore();
    // const querySnapshot = await getDocs(collection(db, "Categories"));
    // querySnapshot.forEach((docs) => console.log(docs.id, docs.data()));

    const id = "facDWNcIsupQCy1DXZaQ";

    // get particular category
    // const db = getFirestore();
    // const categoriesRef = doc(db, `Categories`, id);
    // const data = await getDoc(categoriesRef);
    // console.log(data.data());

    // get Questions of particular quiz
    // const quizzesCollection = collection(db, "Quizzes");
    // const quizzes = await getDocs(quizzesCollection);
    // let quizRef;
    // quizzes.forEach((quiz) => (quizRef = quiz.ref));
    // const questionsCollection = collection(quizRef, "Questions");
    // const questions = await getDocs(questionsCollection);
    // questions.forEach((question) => console.log(question.data(), question.id));
};

// const addCategoies = () => {
//     const db = getDatabase();
//     set(ref(db, "categories/"), categories);
// };

// const getCategories = async () => {
//     const dbRef = ref(getDatabase());
//     const data = await get(child(dbRef, `categories/`));
//     try {
//         if (data.exists()) {
//             console.log(data.val());
//         } else {
//             console.log("No data available");
//         }
//     } catch (error) {
//         console.error(error);
//     }
// };

export { addCategoies, getCategories };
