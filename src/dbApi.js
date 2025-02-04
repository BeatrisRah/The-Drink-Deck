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

function normalizeIngredientName(name) {
    return name.replace(/\b(juice|powder|syrup|dried|fresh|extract)\b/g, '').trim().toLowerCase();
}

async function getByingredients(ingredients) {
    const drinksRef = ref(database, 'drinks');
    const snapshot = await get(drinksRef);

    if (!snapshot.exists()) {
        console.log("No data available.");
        return [];
    }

    const drinksData = snapshot.val();
    const matchingDrinks = [];

    for (const drinkId in drinksData) {
        const drink = drinksData[drinkId];
        // const drinkIngredients = drink.ingredients.map(ingredient => ingredient.name);
        const drinkIngredients = drink.ingredients.map(ingredient => normalizeIngredientName(ingredient.name));

        const normalizedSearchIngredients = ingredients.map(normalizeIngredientName);

        if (normalizedSearchIngredients.some(ingredient => drinkIngredients.includes(ingredient))) {
            matchingDrinks.push({ id: drinkId, ...drink });
        }
    }

    return matchingDrinks;
}

export default {
    fetchData,
    getOne,

    getByingredients
}
