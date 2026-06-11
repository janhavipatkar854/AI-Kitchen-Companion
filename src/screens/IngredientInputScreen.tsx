import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
} from "react-native";

export default function IngredientInputScreen() {
  const [ingredients, setIngredients] = useState("");
  const [showRecipes, setShowRecipes] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {!showRecipes ? (
        <>
          <Text style={styles.title}>
            What ingredients do you have?
          </Text>

          <Text style={styles.subtitle}>
            Example: Eggs, Tomato, Onion
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter ingredients..."
            value={ingredients}
            onChangeText={setIngredients}
            multiline
          />

          <Pressable
            style={styles.button}
            onPress={() => setShowRecipes(true)}
          >
            <Text style={styles.buttonText}>
              ✨ Generate Recipes
            </Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text style={styles.recommendationTitle}>
            🥇 Recommended Recipe
          </Text>

          <View style={styles.recipeCard}>
            <Text style={styles.recipeName}>
              Masala Omelette
            </Text>

            <Text>
              ⭐ Uses your ingredients
            </Text>

            <Text>
              ⏱️ 10 minutes
            </Text>

            <Text>
              🔥 Easy
            </Text>
          </View>

          <Text style={styles.otherTitle}>
            Other Options
          </Text>

          <Text style={styles.option}>
            • Egg Bhurji
          </Text>

          <Text style={styles.option}>
            • Egg Toast
          </Text>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },

  subtitle: {
    color: "#666",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 16,
    minHeight: 120,
    textAlignVertical: "top",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#222",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  recommendationTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  recipeCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
  },

  recipeName: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  otherTitle: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: "600",
  },

  option: {
    marginTop: 10,
    fontSize: 16,
  },
});