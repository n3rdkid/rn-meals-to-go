import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const RestaurantInfo = ({restaurant={}})=>{

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
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    </Card>
   </>
}

const styles = StyleSheet.create({
    card : {
        backgroundColor: "white"
    },
})