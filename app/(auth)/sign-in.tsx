import { Link, Redirect } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />;
  }
  return (
    <SafeAreaView className="flex-1">
      <Text>SignIn</Text>
      <Link href={"/sign-up"}>Go to Home</Link>
    </SafeAreaView>
  );
};

export default SignIn;
