import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <>
    <StatusBar style="auto"/>
    <SafeAreaView style={{flex:1}}>
    <View style={styles.search}>
     <Text>Search</Text>
    </View>
    <View style={styles.list}>
    <Text>List</Text>
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    padding:16,
    backgroundColor:'red'
  },
  list: {
    flex:1,
    padding:16,
    backgroundColor:'green'
  },
});
