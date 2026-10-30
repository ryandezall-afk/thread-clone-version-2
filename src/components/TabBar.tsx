import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { useTabBar } from "./TabBarContext";

export function TabBar() {
  const router = useRouter();
  const pathname = usePathname();
  const { isTabBarVisible } = useTabBar();
  const translateY = useRef(new Animated.Value(0)).current;

  // Slide down when hidden, slide up when visible
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isTabBarVisible ? 0 : 80,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isTabBarVisible]);

  return (
    <Animated.View style={[styles.navbar, { transform: [{ translateY }] }]}>
      {/* 1. Home */}
      <TouchableOpacity
        onPress={() => router.push("/")}
        activeOpacity={0.7}
      >
        <Ionicons name="home" size={26} style={styles.navIconCurrent} />
      </TouchableOpacity>

      {/* 2. Paper Plane */}
      <TouchableOpacity
        onPress={() => router.push("/search" as any)}
        activeOpacity={0.7}
      >
        <Ionicons
          name="paper-plane-outline"
          size={26}
          style={styles.navIcon}
        />
      </TouchableOpacity>

      {/* 3. Add */}
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.7}
        style={styles.addButtonContainer}
      >
        <View style={styles.addButton}>
          <Ionicons name="add" size={22} color="#000000" />
        </View>
      </TouchableOpacity>

      {/* 4. Heart */}
      <TouchableOpacity
        onPress={() => router.push("/activity" as any)}
        activeOpacity={0.7}
      >
        <Ionicons name="heart-outline" size={26} style={styles.navIcon} />
      </TouchableOpacity>

      {/* 5. Profile Pic */}
      <TouchableOpacity
        onPress={() => router.push("/profile" as any)}
        activeOpacity={0.7}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.profilePicNav}
        />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 18,
  },
  navIcon: {
    color: "#FFFFFF",
  },
  navIconCurrent: {
    color: "#FFFFFF",
  },
  profilePicNav: {
    borderRadius: 100,
    width: 30,
    height: 30,
  },
  addButtonContainer: {
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    width: 42,
    height: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
