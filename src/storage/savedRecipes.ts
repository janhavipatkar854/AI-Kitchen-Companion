import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "savedRecipes";

export async function getSavedRecipes() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function saveRecipe(recipeName: string) {
  try {
    const recipes = await getSavedRecipes();

    if (!recipes.includes(recipeName)) {
      const updatedRecipes = [...recipes, recipeName];

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedRecipes)
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export async function removeRecipe(recipeName: string) {
  try {
    const recipes = await getSavedRecipes();

    console.log("Before remove:", recipes);
    console.log("Removing:", recipeName);

    const updatedRecipes = recipes.filter(
      (recipe: string) => recipe !== recipeName
    );

    console.log("After remove:", updatedRecipes);

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedRecipes)
    );
  } catch (error) {
    console.log(error);
  }
}