import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";
import RecipeResultsScreen from "../screens/RecipeResultsScreen";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RecipeResults"
          component={RecipeResultsScreen}
          options={{
            title: "Recipe Results",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}