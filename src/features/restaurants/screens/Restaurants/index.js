import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView,  StatusBar,  StyleSheet,  Text,  View} from "react-native";
import {RestaurantInfoCard} from "../../components"
import styled from "styled-components/native"

const SafeAreaViewWrapper=styled.SafeAreaView`
display:flex;
`
const SearchWrapper=styled.View`
padding: 16px;
`
const RestaurantList=styled.View`
display:flex;
padding: 16px;
`


export const RestaurantScreen=()=> {
  return (
    <>
      <StatusBar />
      <SafeAreaViewWrapper>
        <SearchWrapper>
          <Searchbar placeholder="Search" />
        </SearchWrapper>
        <RestaurantList>
          <RestaurantInfoCard/>
        </RestaurantList>
      </SafeAreaViewWrapper>
    </>
  );
}
