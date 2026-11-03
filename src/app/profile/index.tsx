import { PostCard } from "@/components/PostCard";
import { USER_PROFILE } from "@/data/userPosts";
import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Ionicons name="bar-chart-outline" size={24} color="#FFFFFF" />

        <View style={styles.headerRight}>
          <Ionicons name="search-outline" size={24} color="#FFFFFF" />
          <Ionicons name="logo-instagram" size={24} color="#FFFFFF" />
          <Ionicons name="settings-outline" size={24} color="#FFFFFF" />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
      >
        <View style={styles.container}>
          <View style={styles.userHeader}>
            <View style={styles.userHeaderBox}>
              <View style={styles.nameRow}>
                <Text style={styles.name}>{USER_PROFILE.displayName}</Text>
                <Ionicons name="chevron-down" size={16} color="#FFFFFF" />
              </View>
              <Text style={styles.username}>{USER_PROFILE.username}</Text>
            </View>
            <Image
              source={{ uri: USER_PROFILE.avatar }}
              style={styles.avatar}
            />
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.bio}>{USER_PROFILE.bio}</Text>
            <Text style={styles.link}>{USER_PROFILE.link}</Text>
            <View style={styles.interestsRow}>
              {USER_PROFILE.interests.map((interest) => (
                <View key={interest.id} style={styles.interestPill}>
                  <Text style={styles.interestText}>{interest.label}</Text>
                </View>
              ))}
              <View style={[styles.interestPill, styles.addPill]}>
                <Ionicons name="add" size={14} color="#777777" />
              </View>
            </View>

            <View style={styles.followersRow}>
              <View style={styles.followerAvatars}>
                {USER_PROFILE.followerAvatars.map((uri, index) => (
                  <Image
                    key={index}
                    source={{ uri }}
                    style={[
                      styles.followerAvatar,
                      index > 0 && styles.followerAvatarOverlap,
                    ]}
                  />
                ))}
              </View>
              <Text style={styles.followersCount}>
                {USER_PROFILE.followersCount}
              </Text>
            </View>

            <View style={styles.profileManagement}>
              <Text style={styles.pillManageProfile}>Edit Profile</Text>
              <Text style={styles.pillManageProfile}>View Insights</Text>
              <Ionicons
                name="share-outline"
                size={18}
                color="#FFFFFF"
                style={[styles.pillManageProfile, styles.sharePill]}
              />
            </View>
          </View>
        </View>

        <View style={styles.stickyHeader}>
          <View style={styles.tabsRow}>
            <Text style={[styles.tabText, styles.activeTabText]}>Threads</Text>
            <Text style={styles.tabText}>Replies</Text>
            <Text style={styles.tabText}>Media</Text>
            <Text style={styles.tabText}>Reposts</Text>
          </View>
        </View>

        {USER_PROFILE.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ScrollView>
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
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  userHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 8,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  userHeaderBox: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  username: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 2,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  headerContent: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  bio: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 20,
  },
  link: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 4,
  },
  interestsRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 10,
  },
  interestPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderColor: "#262626",
    backgroundColor: "#161616",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
  },
  interestText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "500",
  },
  addPill: {
    paddingHorizontal: 8,
  },
  followersRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
  },
  followerAvatars: {
    flexDirection: "row",
    alignItems: "center",
  },
  followerAvatar: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: "#000000",
  },
  followerAvatarOverlap: {
    marginLeft: -6,
  },
  followersCount: {
    color: "#777777",
    fontSize: 14,
  },
  profileManagement: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
  },
  pillManageProfile: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  sharePill: {
    flex: 0,
    paddingHorizontal: 10,
  },
  stickyHeader: {
    backgroundColor: "#000000",
    width: "100%",
  },
  tabsRow: {
    flexDirection: "row",
    backgroundColor: "#000000",
    borderBottomWidth: 0.5,
    borderBottomColor: "#262626",
    marginTop: 16,
    width: "100%",
  },
  tabText: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 12,
    color: "#777777",
    fontSize: 15,
    fontWeight: "600",
  },
  activeTabText: {
    color: "#FFFFFF",
    borderBottomWidth: 1.5,
    borderBottomColor: "#FFFFFF",
  },
});
