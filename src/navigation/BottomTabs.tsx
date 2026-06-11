import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import AssistantScreen from "../screens/AssistantScreen";
import PantryScreen from "../screens/PantryScreen";
import InsightsScreen from "../screens/InsightsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "#999",

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = "home";
          } else if (
            route.name === "AI Assistant"
          ) {
            iconName = "chatbubble-ellipses";
          } else if (
            route.name === "Pantry"
          ) {
            iconName = "restaurant";
          } else if (
            route.name === "Insights"
          ) {
            iconName = "bar-chart";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="AI Assistant"
        component={AssistantScreen}
      />

      <Tab.Screen
        name="Pantry"
        component={PantryScreen}
      />

      <Tab.Screen
        name="Insights"
        component={InsightsScreen}
      />
    </Tab.Navigator>
  );
}