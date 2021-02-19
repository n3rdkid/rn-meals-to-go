import React from "react";
import {
  TextInput,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RestaurantScreen } from "./src/features/restaurants/screens";

export default function App() {
  return (
   <>
    <RestaurantScreen/>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
    backgroundColor: "red",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "green",
  },
});
