import { ActivityItem as ActivityItemType } from "@/data/activitiesData";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ActivityItemProps {
  activity: ActivityItemType;
  onPress?: () => void;
}

export function ActivityItem({ activity, onPress }: ActivityItemProps) {
  const username = activity.post?.username ?? activity.user?.username ?? "";
  const avatar = activity.post?.avatar ?? activity.user?.avatar ?? "";
  const postContent =
    activity.post?.paragraphs?.[0] ?? activity.post?.content ?? "";
  const thumbnail = activity.post?.images?.[0];
  const isVerified = activity.post?.isVerified;
  const time = activity.post?.time ?? activity.time;
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        disabled={!onPress}
      >
        <View style={styles.card}>
          <View style={styles.leftSide}>
            <Image source={{ uri: avatar }} style={styles.profilePic} />
          </View>

          <View style={styles.rightSide}>
            <View style={styles.header}>
              <View style={styles.userRow}>
                <View style={styles.topRow}>
                  <Text style={styles.username}>{username}</Text>
                  {isVerified && (
                    <Ionicons
                      name="checkmark-circle"
                      size={14}
                      color="#0095F6"
                    />
                  )}
                  {time && <Text style={styles.timeActivity}>{time}</Text>}
                </View>
                <View style={styles.bottomRow}>
                  <Text style={styles.subtitle}>{activity.subtitle}</Text>
                </View>
              </View>

              {activity.type === "follow" && (
                <Text style={styles.followButton}>Follow</Text>
              )}

              {activity.type === "post" && thumbnail && (
                <Image
                  source={{ uri: thumbnail }}
                  style={styles.postThumbnail}
                />
              )}
            </View>

            {activity.type === "post" && (
              <>
                <View style={styles.postPreview}>
                  <Text style={styles.postContent} numberOfLines={3}>
                    {postContent}
                  </Text>
                </View>

                <View style={styles.postInfo}>
                  <View style={styles.actionItem}>
                    <Ionicons
                      name="heart-outline"
                      style={styles.actionIcon}
                      size={18}
                    />
                    <Text style={styles.actionCount}>
                      {activity.post?.likes ?? 0}
                    </Text>
                  </View>
                  <View style={styles.actionItem}>
                    <Ionicons
                      name="chatbubble-outline"
                      style={styles.actionIcon}
                      size={18}
                    />
                    <Text style={styles.actionCount}>
                      {activity.post?.comments ?? 0}
                    </Text>
                  </View>
                  <View style={styles.actionItem}>
                    <MaterialCommunityIcons
                      name="repeat-variant"
                      style={styles.actionIcon}
                      size={20}
                    />
                    <Text style={styles.actionCount}>
                      {activity.post?.reposts ?? 0}
                    </Text>
                  </View>
                  <View style={styles.actionItem}>
                    <Feather name="send" style={styles.actionIcon} size={16} />
                    <Text style={styles.actionCount}>
                      {activity.post?.shares ?? 0}
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  leftSide: {
    marginRight: 10,
  },
  profilePic: {
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  rightSide: {
    flex: 1,
    justifyContent: "space-evenly",
    gap: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userRow: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  bottomRow: {
    marginTop: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginRight: 2,
  },
  timeActivity: {
    color: "#777777",
    fontSize: 14,
  },
  followButton: {
    color: "#000000",
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
    overflow: "hidden",
  },
  subtitle: {
    color: "#777777",
    fontSize: 14,
  },
  postPreview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  postContent: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  postThumbnail: {
    width: 44,
    height: 44,
    borderRadius: 8,
  },
  postInfo: {
    flexDirection: "row",
    gap: 20,
    marginTop: 6,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actionIcon: {
    color: "#FFFFFF",
  },
  actionCount: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  divider: {
    height: 0.5,
    backgroundColor: "#262626",
    width: "100%",
  },
});
