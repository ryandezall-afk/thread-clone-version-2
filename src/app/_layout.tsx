import { Slot } from "expo-router";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabBarProvider } from "../components/TabBarContext";
import { TabBar } from "../components/TabBar";
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <TabBarProvider>
        <View style={styles.container}>
          {/* This <View style={{ flex: 1 }}> forces your screen & posts to fill the height */}
          <View style={{ flex: 1 }}>
            <Slot />
          </View>
          {/* Your TabBar sits at the bottom */}
          <TabBar />
        </View>
      </TabBarProvider>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});