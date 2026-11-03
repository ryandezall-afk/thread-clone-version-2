import { PostCard } from "@/components/PostCard";
import { INITIAL_POSTS } from "@/data/postsData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
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
  const post = INITIAL_POSTS.find((p) => p.id === id);

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
        <PostCard post={post} showFollowButton={true} />
        <View style={styles.similarPostsContainer}></View>
        {post.replies?.map((reply) => (
          <PostCard key={reply.id} post={reply as any} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
    marginBottom: 60,
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
  scrollContent: {},
  similarPostsContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  headerViewsContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  }
});
