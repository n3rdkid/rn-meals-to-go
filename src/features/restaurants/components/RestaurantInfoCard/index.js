import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title } from 'react-native-paper';

export const RestaurantInfoCard = ({restaurant={}})=>{

    const {
        name="Some Restaurant",
        icon,
        photos=["https://picsum.photos/200/300"],
        address="DUMMY addess",
        isOpenNow=true,
        rating=4,
        isClosedTemporarily=false }=restaurant;

   return <>
    <Card elevation={5} style={styles.card}>
    <Card.Cover key={`${name}-card-cover`} source={{ uri: photos[0] }} />
    <Card.Content key={`${name}-card-content`}>
      <Title style={styles.title}>{name}</Title>
    </Card.Content>
    </Card>
   </>
}

const styles = StyleSheet.create({
    card : {
        backgroundColor: "white"
    },
    title:{
        paddingTop:8
    }
})