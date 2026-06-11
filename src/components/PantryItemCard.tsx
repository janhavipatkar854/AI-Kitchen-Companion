import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

type PantryItemCardProps = {
  emoji: string;
  name: string;
  quantity: string;
  expiry: string;
  selected?: boolean;
  onPress?: () => void;
};

export default function PantryItemCard({
  emoji,
  name,
  quantity,
  expiry,
  selected = false,
  onPress,
}: PantryItemCardProps) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.card,
          selected && styles.selectedCard,
        ]}
      >
        <View style={styles.topRow}>
          <Text style={styles.name}>
            {emoji} {name}
          </Text>

          {selected && (
            <View style={styles.checkBadge}>
              <Text style={styles.checkText}>
                ✓
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.quantity}>
          Quantity: {quantity}
        </Text>

        <Text style={styles.expiry}>
          ⏰ Expires in {expiry}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,

    elevation: 2,
  },

  selectedCard: {
    borderWidth: 2,
    borderColor: "#4CAF50",
    backgroundColor: "#E8F5E9",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  quantity: {
    marginTop: 8,
    fontSize: 14,
    color: "#666",
  },

  expiry: {
    marginTop: 6,
    fontSize: 14,
    color: "#E67E22",
    fontWeight: "500",
  },

  checkBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },

  checkText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
});