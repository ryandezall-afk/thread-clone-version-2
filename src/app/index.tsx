import React, { useRef } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { PostCard } from "../components/PostCard";
import { useTabBar } from "../components/TabBarContext";
import { INITIAL_POSTS } from "../data/postsData";

export default function Index() {
  const { setIsTabBarVisible } = useTabBar();
  const lastScrollY = useRef(0);

  // Detect scroll direction: hide on scroll down, show on scroll up
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentY = event.nativeEvent.contentOffset.y;

    if (currentY > lastScrollY.current && currentY > 40) {
      setIsTabBarVisible(false); // scrolling down
    } else if (currentY < lastScrollY.current) {
      setIsTabBarVisible(true); // scrolling up
    }

    lastScrollY.current = currentY;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Exact Header from Assignment 1 */}
      <View style={styles.header}>
        <Ionicons name="reorder-two-outline" size={30} color="#FFFFFF" />
        <Text style={styles.headerLogo}>@threads</Text>
        <Ionicons name="search-outline" size={24} color="#FFFFFF" />
      </View>

      {/* Feed with scroll tracking */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {INITIAL_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#000000",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  headerLogo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#000000",
    paddingBottom: 90,
  },
});
