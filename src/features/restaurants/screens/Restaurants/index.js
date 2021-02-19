import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView,  StatusBar,  StyleSheet,  Text,  View} from "react-native";
import {RestaurantInfo} from "../../components"

export const RestaurantScreen=()=> {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.list}>
          <RestaurantInfo></RestaurantInfo>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
