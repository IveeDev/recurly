import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="bg-background flex-1 p-5">
      <Text className="bg-background">
        Edit app/index.tsx to edit this screen.
      </Text>
    </SafeAreaView>
  );
}
