import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import SwipeButton from "rn-swipe-button";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  let forceResetLastButton = null;
  const handleSwipeSuccess = () => {
    navigation.navigate("HomeScreen");
  };
  const navigation = useNavigation();
  return (
    <View>
      <Text>Cooking Experience Like a Chef</Text>
      <Text>
        Let's make a delicious dish with the best recipe for the family
      </Text>
      <SwipeButton
        onSwipeSuccess={() => handleSwipeSuccess()}
        disableResetOnTap
        forceReset={(reset) => {
          forceResetLastButton = reset;
        }}
        railBackgroundColor="#9fc7e8"
        railStyles={{
          backgroundColor: "#44000088",
          borderColor: "#880000FF",
        }}
        thumbIconBackgroundColor="#FFFFFF"
        title="Slide to unlock"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
