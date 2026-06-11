import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RecommendationCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.recipe}>
        🍳 Tomato Omelette
      </Text>

      <Text>
        Uses:
      </Text>

      <Text>✓ Tomato</Text>
      <Text>✓ Eggs</Text>

      <Text style={styles.note}>
        Saves food from expiring tomorrow
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 12,
  },

  recipe: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },

  note: {
    marginTop: 8,
  },
});