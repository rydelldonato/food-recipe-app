import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/welcomeScreen/welcomeScreen";
import HomeScreen from "./screens/homeScreen";
import SplashScreenAnimation from "./animations/splashScreenAnimation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false);

  useEffect(() => {
    // This useEffect will play the animation when transitioning to the HomeScreen
    if (shouldPlayAnimation) {
      // You might want to add some logic to control when the animation should stop playing.
      // For now, let's stop it after 3000ms (3 seconds).
      setTimeout(() => {
        setShouldPlayAnimation(false);
      }, 3000);
    }
  }, [shouldPlayAnimation]);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            gestureEnabled: false,
          })}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              animation: "slide_from_bottom", // Add transition animation
              cardStyleInterpolator: ({ current }) => ({
                cardStyle: {
                  opacity: current.progress,
                },
              }),
              headerShown: false,
              gestureEnabled: false,
            }}
            sharedElementsConfig={(route, otherRoute, showing) => {
              const isBackward = showing === "screen2";
              return [
                {
                  id: "lottie",
                  animation: "fade",
                  resize: "clip",
                  align: "center-top",
                  fromId: isBackward ? "screen2" : "screen1",
                  toId: isBackward ? "screen1" : "screen2",
                  interpolation: "linear",
                },
              ];
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {shouldPlayAnimation && <SplashScreenAnimation />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
