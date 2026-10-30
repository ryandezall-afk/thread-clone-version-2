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

  // Detect which page is currently active:
  const isHome = pathname === "/" || pathname === "/index";
  const isMessages = pathname.includes("messages");
  const isActivity = pathname.includes("activity");
  const isProfile = pathname.includes("profile");

  // Slide down when hidden, slide up when visible
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isTabBarVisible ? 0 : 120,
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
        <Ionicons
          name={isHome ? "home" : "home-outline"}
          size={26}
          color={isHome ? "#FFFFFF" : "#777777"}
        />
      </TouchableOpacity>

      {/* 2. Paper Plane */}
      <TouchableOpacity
        onPress={() => router.push("/messages")}
        activeOpacity={0.7}
      >
        <Ionicons
          name={isMessages ? "paper-plane" : "paper-plane-outline"}
          size={26}
          color={isMessages ? "#FFFFFF" : "#777777"}
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
        <Ionicons
          name={isActivity ? "heart" : "heart-outline"}
          size={26}
          color={isActivity ? "#FFFFFF" : "#777777"}
        />
      </TouchableOpacity>

      {/* 5. Profile Pic */}
      <TouchableOpacity
        onPress={() => router.push("/profile" as any)}
        activeOpacity={0.7}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={[
            styles.profilePicNav,
            isProfile && { borderColor: "#FFFFFF", borderWidth: 1.5 },
          ]}
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
