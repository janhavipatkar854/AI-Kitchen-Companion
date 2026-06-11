import React from "react";
import { Text, StyleSheet } from "react-native";

type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({
  title,
}: SectionHeaderProps) {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 12,
  },
});