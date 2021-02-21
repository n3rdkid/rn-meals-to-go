import React from "react";
import { Card, Title } from 'react-native-paper';
import styled from "styled-components/native"

const RestaurantCard = styled(Card)`
backgroundColor: "white";
`
const RestaurantCardTitle = styled(Title)`
paddingTop:8px;
`
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
    <RestaurantCard elevation={5}>
    <Card.Cover key={`${name}-card-cover`} source={{ uri: photos[0] }} />
    <Card.Content key={`${name}-card-content`}>
      <RestaurantCardTitle>{name}</RestaurantCardTitle>
    </Card.Content>
    </RestaurantCard>
   </>
}