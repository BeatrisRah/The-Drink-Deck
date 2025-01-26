import { get, ref } from "firebase/database";
import { database } from "../firebaseinit.js";


const fetchData = async () => {
    const dbRef = ref(database, 'drinks');
    try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
            return null;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

async function getOne(id) {
    const dbRef = ref(database, `drinks/${id}`);
    try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data;
        } else {
            console.log("No data found");
            return null;
        }
    } catch (error) {
        console.error("Error fetching drink:", error);
    }
}

export default {
    fetchData,
    getOne
}
