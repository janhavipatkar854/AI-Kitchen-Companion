import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";

import { useRoute } from "@react-navigation/native";

import { recipes } from "../data/recipes";

import {
  getSavedRecipes,
  saveRecipe,
  removeRecipe,
} from "../storage/savedRecipes";

export default function RecipeResultsScreen() {
  const route = useRoute<any>();

  const [saved, setSaved] = useState(false);

  const selectedItems =
    route.params?.selectedItems || [];

  const matchedRecipes = recipes
    .map((recipe) => {
      const score = recipe.ingredients.filter(
        (ingredient) =>
          selectedItems.includes(ingredient)
      ).length;

      return {
        ...recipe,
        score,
      };
    })
    .filter((recipe) => recipe.score > 0)
    .sort((a, b) => b.score - a.score);

  const bestMatch = matchedRecipes[0];
  const otherMatches = matchedRecipes.slice(1);

  useEffect(() => {
    async function checkSavedStatus() {
      if (!bestMatch) return;

      const savedRecipes =
        await getSavedRecipes();

      setSaved(
        savedRecipes.includes(bestMatch.name)
      );
    }

    checkSavedStatus();
  }, [bestMatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>
          🥇 Best Match
        </Text>

        {bestMatch ? (
          <View style={styles.mainCard}>
            <Text style={styles.recipeName}>
              🍳 {bestMatch.name}
            </Text>

            <View style={styles.scoreBadge}>
              <Text style={styles.scoreText}>
                ⭐ Match Score: {bestMatch.score}
              </Text>
            </View>

            <Text style={styles.sectionTitle}>
              💡 Why Recommended
            </Text>

            <Text style={styles.reasonText}>
              {bestMatch.reason}
            </Text>

            <Text style={styles.sectionTitle}>
              📋 Ingredients Used
            </Text>

            {bestMatch.ingredients.map(
              (ingredient) => (
                <Text
                  key={ingredient}
                  style={styles.ingredient}
                >
                  ✓ {ingredient}
                </Text>
              )
            )}

            <Pressable
              style={[
                styles.saveButton,
                saved &&
                  styles.savedButton,
              ]}
              onPress={async () => {
                if (!bestMatch) return;

                if (saved) {
                  await removeRecipe(
                    bestMatch.name
                  );
                  setSaved(false);
                } else {
                  await saveRecipe(
                    bestMatch.name
                  );
                  setSaved(true);
                }
              }}
            >
              <Text style={styles.saveText}>
                {saved
                  ? "❤️ Saved"
                  : "🤍 Save Recipe"}
              </Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              No matching recipes found.
            </Text>
          </View>
        )}

        {otherMatches.length > 0 && (
          <>
            <Text style={styles.otherTitle}>
              🍽 Other Matches
            </Text>

            {otherMatches.map((recipe) => (
              <View
                key={recipe.name}
                style={styles.otherCard}
              >
                <Text
                  style={styles.otherRecipe}
                >
                  {recipe.name}
                </Text>
              </View>
            ))}
          </>
        )}

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 16,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    color: "#222",
  },

  mainCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    elevation: 3,
    marginBottom: 20,
  },

  recipeName: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
  },

  scoreBadge: {
    backgroundColor: "#E8F5E9",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 12,
  },

  scoreText: {
    color: "#2E7D32",
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 18,
    marginBottom: 10,
    color: "#222",
  },

  reasonText: {
    color: "#555",
    lineHeight: 22,
  },

  ingredient: {
    fontSize: 15,
    marginBottom: 6,
    color: "#444",
  },

  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
  },

  savedButton: {
    backgroundColor: "#2E7D32",
  },

  saveText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },

  otherTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    color: "#222",
  },

  otherCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
  },

  otherRecipe: {
    fontSize: 16,
    fontWeight: "600",
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
  },

  emptyText: {
    color: "#666",
  },
});