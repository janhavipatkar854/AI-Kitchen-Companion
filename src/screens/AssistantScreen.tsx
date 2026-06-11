import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";

import {
  getSavedRecipes,
  removeRecipe,
} from "../storage/savedRecipes";

export default function AssistantScreen() {
  const [savedRecipes, setSavedRecipes] =
    useState<string[]>([]);

  useEffect(() => {
    loadSavedRecipes();
  }, []);

  async function loadSavedRecipes() {
    const recipes = await getSavedRecipes();
    setSavedRecipes(recipes);
  }

  async function handleRemoveRecipe(
    recipeName: string
  ) {
    console.log("Button pressed:", recipeName);

    await removeRecipe(recipeName);

    const updatedRecipes =
      await getSavedRecipes();

    setSavedRecipes(updatedRecipes);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>
          🤖 AI Assistant
        </Text>

        <Text style={styles.sectionTitle}>
          ❤️ Saved Recipes
        </Text>

        {savedRecipes.length === 0 ? (
          <Text style={styles.emptyText}>
            No saved recipes yet.
          </Text>
        ) : (
          savedRecipes.map((recipe) => (
            <View
              key={recipe}
              style={styles.card}
            >
              <Text style={styles.recipeText}>
                🍳 {recipe}
              </Text>

              <Pressable
                style={styles.removeButton}
                onPress={() =>
                  handleRemoveRecipe(recipe)
                }
              >
                <Text style={styles.removeText}>
                  🗑 Remove
                </Text>
              </Pressable>
            </View>
          ))
        )}

        <Text style={styles.sectionTitle}>
          🕒 Recently Generated
        </Text>

        <Text style={styles.emptyText}>
          Coming Soon...
        </Text>

        <Text style={styles.sectionTitle}>
          💬 Ask AI
        </Text>

        <Text style={styles.emptyText}>
          Coming Soon...
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    marginTop: 20,
  },

  card: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },

  recipeText: {
    fontSize: 16,
    fontWeight: "500",
  },

  removeButton: {
    marginTop: 12,
    backgroundColor: "#EAEAEA",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  removeText: {
    fontWeight: "600",
  },

  emptyText: {
    color: "#666",
  },
});