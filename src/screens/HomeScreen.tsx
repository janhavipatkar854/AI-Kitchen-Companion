import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
} from "react-native";

import ActionCard from "../components/ActionCard";
import SectionHeader from "../components/SectionHeader";
import RecommendationCard from "../components/RecommendationCard";
import PantryItemCard from "../components/PantryItemCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroSection}>
          <Text style={styles.greeting}>
            Hi Janhavi 👋
          </Text>

          <Text style={styles.subtitle}>
            Ready to cook something amazing today?
          </Text>
        </View>

        <SectionHeader title="⚡ Quick Actions" />

        <ActionCard
          title="🍔 I don't want to cook"
          onPress={() => {}}
        />

        <ActionCard
          title="🍳 What can I make?"
          onPress={() => {}}
        />

        <ActionCard
          title="🛒 Plan groceries"
          onPress={() => {}}
        />

        <ActionCard
          title="🥬 Use expiring food"
          onPress={() => {}}
        />

        <SectionHeader title="⭐ Recommended For You" />

        <RecommendationCard />

        <SectionHeader title="⏰ Expiring Soon" />

        <PantryItemCard
          emoji="🍅"
          name="Tomato"
          quantity="500 g"
          expiry="1 day"
        />

        <PantryItemCard
          emoji="🥛"
          name="Milk"
          quantity="1 L"
          expiry="2 days"
        />

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },

  heroSection: {
    backgroundColor: "#4CAF50",
    margin: 16,
    borderRadius: 20,
    padding: 24,
    elevation: 3,
  },

  greeting: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 16,
    color: "#E8F5E9",
    marginTop: 8,
    lineHeight: 22,
  },

  bottomSpacing: {
    height: 30,
  },
});