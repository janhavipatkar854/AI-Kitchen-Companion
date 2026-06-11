import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type ActionCardProps = {
  title: string;
  onPress: () => void;
};

export default function ActionCard({
  title,
  onPress,
}: ActionCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    marginBottom: 12,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});