import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";


const SplashScreenAnimation = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("./splashAnimation.json")} // Replace with your animation JSON file
        autoPlay
        loop={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreenAnimation;
