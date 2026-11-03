// Assignment 2 - Threads Clone
// Screen 5: Thread Detail Screen (Stack flow, parameterized [id], post view count, nested replies)

import { PostCard } from "@/components/PostCard";
import { INITIAL_POSTS } from "@/data/postsData";
import { USER_PROFILE } from "@/data/userPosts";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ThreadScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const post =
    INITIAL_POSTS.find((p) => p.id === id) ??
    USER_PROFILE.posts.find((p) => p.id === id);

  if (!post) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
            <Ionicons name="arrow-back" size={26} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Thread</Text>
          <View style={{ width: 26 }} />
        </View>
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Thread not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
            <Ionicons name="arrow-back" size={26} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.headerViewsContainer}>
            <Text style={styles.headerTitle}>Thread</Text>
            <Text style={styles.threadViews}>{post.views} views</Text>
          </View>
        </View>
        <View style={styles.headerIconRight}>
          <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
          <Ionicons
            name="ellipsis-horizontal-circle-outline"
            size={24}
            color="#FFFFFF"
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <PostCard post={post} showFollowButton={true} hideMenu={true} />
        <View style={styles.similarPostsContainer}></View>
        {post.replies?.map((reply) => (
          <PostCard key={reply.id} post={reply as any} hideMenu={true} />
        ))}
      </ScrollView>

      {/* Pinned Bottom Reply Bar (matches real Threads stack view) */}
      <View style={styles.replyBar}>
        <View style={styles.replyPill}>
          <Image
            source={{ uri: USER_PROFILE.avatar }}
            style={styles.replyAvatar}
          />
          <Text style={styles.replyPlaceholder} numberOfLines={1}>
            Reply to {post.username}...
          </Text>
          <View style={styles.replyIcons}>
            <Ionicons name="image-outline" size={20} color="#777777" />
            <MaterialCommunityIcons
              name="file-gif-box"
              size={20}
              color="#777777"
            />
            <Feather name="maximize-2" size={16} color="#777777" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#1C1C1C",
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  notFoundText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  threadViews: {
    color: "#777777",
    fontSize: 12,
    marginTop: 2,
  },
  headerIconRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  similarPostsContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  headerViewsContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  replyBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
    backgroundColor: "transparent",
  },
  replyAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  replyPill: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#262626",
    backgroundColor: "#161616",
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 6,
  },
  replyPlaceholder: {
    color: "#777777",
    fontSize: 14,
    flex: 1,
    marginRight: 8,
  },
  replyIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
