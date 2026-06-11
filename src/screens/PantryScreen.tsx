import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import PantryItemCard from "../components/PantryItemCard";

export default function PantryScreen() {
  const navigation = useNavigation<any>();

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (itemName: string) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(
        selectedItems.filter(
          (item) => item !== itemName
        )
      );
    } else {
      setSelectedItems([
        ...selectedItems,
        itemName,
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>
            🥫 My Pantry
          </Text>

          <Text style={styles.subtitle}>
            Select ingredients you currently have
          </Text>
        </View>

        <Text style={styles.selectedText}>
          Selected: {selectedItems.length}
        </Text>

        <PantryItemCard
          emoji="🥛"
          name="Milk"
          quantity="1 L"
          expiry="2 days"
          selected={selectedItems.includes("Milk")}
          onPress={() => toggleItem("Milk")}
        />

        <PantryItemCard
          emoji="🍅"
          name="Tomato"
          quantity="500 g"
          expiry="1 day"
          selected={selectedItems.includes("Tomato")}
          onPress={() => toggleItem("Tomato")}
        />

        <PantryItemCard
          emoji="🥚"
          name="Eggs"
          quantity="12"
          expiry="5 days"
          selected={selectedItems.includes("Eggs")}
          onPress={() => toggleItem("Eggs")}
        />

        <PantryItemCard
          emoji="🧅"
          name="Onion"
          quantity="1 kg"
          expiry="10 days"
          selected={selectedItems.includes("Onion")}
          onPress={() => toggleItem("Onion")}
        />

        {selectedItems.length > 0 && (
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate(
                "RecipeResults",
                {
                  selectedItems,
                }
              )
            }
          >
            <Text style={styles.buttonText}>
              ✨ Generate Recipes
            </Text>

            <Text style={styles.buttonSubtext}>
              Using {selectedItems.length} ingredients
            </Text>
          </Pressable>
        )}

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    paddingHorizontal: 16,
  },

  header: {
    marginTop: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    fontSize: 15,
    color: "#666",
    marginTop: 6,
  },

  selectedText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4CAF50",
    marginBottom: 16,
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 16,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  buttonSubtext: {
    color: "#E8F5E9",
    marginTop: 4,
    fontSize: 13,
  },

  bottomSpacing: {
    height: 30,
  },
});