import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export interface Post {
  id: string;
  username: string;
  avatar: string;
  uniqueContent?: string;
  paragraphs?: string[];
  content?: string;
  images?: string[];
  likes?: number | string;
  comments?: number | string;
  reposts?: number | string;
  shares?: number | string;
}

interface PostCardProps {
  post: Post;
  onPress?: () => void;
}

export function PostCard({ post, onPress }: PostCardProps) {
  return (
    <View>
      <View style={styles.card}>
        {/* left side of card, profile pic */}
        <View style={styles.leftSide}>
          <Image source={{ uri: post.avatar }} style={styles.profilePic} />
        </View>

        {/* right side of card, post content */}
        <View style={styles.rightSide}>
          <Text style={styles.username}>{post.username}</Text>

          {/* unique gray text (e.g., "What's New?") */}
          {post.uniqueContent && (
            <Text style={styles.uniqueContent}>{post.uniqueContent}</Text>
          )}

          {/* single paragraph content */}
          {post.content && (
            <Text style={styles.cardTextContent}>{post.content}</Text>
          )}

          {/* multi paragraph content */}
          {post.paragraphs &&
            post.paragraphs.map((p, idx) => (
              <Text key={idx} style={styles.cardTextContent}>
                {p}
              </Text>
            ))}

          {/* carousel of images if present */}
          {post.images && post.images.length > 0 && (
            <ScrollView
              style={styles.postImageContainer}
              contentContainerStyle={styles.postImageScrollContent}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
            >
              {post.images.map((imgUri, index) => (
                <Image
                  key={index}
                  source={{ uri: imgUri }}
                  style={styles.carouselImage}
                />
              ))}
            </ScrollView>
          )}

          {/* action row (likes, comments, reposts, share) */}
          {(post.likes !== undefined || post.comments !== undefined) && (
            <View style={styles.postInfo}>
              {/* Like */}
              <View style={styles.actionItem}>
                <Ionicons
                  name="heart-outline"
                  style={styles.actionIcon}
                  size={20}
                />
                <Text style={styles.actionCount}>{post.likes ?? 0}</Text>
              </View>

              {/* Comment */}
              <View style={styles.actionItem}>
                <Ionicons
                  name="chatbubble-outline"
                  style={styles.actionIcon}
                  size={20}
                />
                <Text style={styles.actionCount}>{post.comments ?? 0}</Text>
              </View>

              {/* Repost */}
              <View style={styles.actionItem}>
                <MaterialCommunityIcons
                  name="repeat-variant"
                  style={styles.actionIcon}
                  size={22}
                />
                <Text style={styles.actionCount}>{post.reposts ?? 0}</Text>
              </View>

              {/* Share */}
              <View style={styles.actionItem}>
                <Feather name="send" style={styles.actionIcon} size={18} />
                <Text style={styles.actionCount}>{post.shares ?? 0}</Text>
              </View>
            </View>
          )}
        </View>
      </View>

      {/* Divider line between posts */}
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
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
    gap: 6,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  uniqueContent: {
    color: "#777777",
    fontSize: 16,
  },
  divider: {
    height: 0.5,
    backgroundColor: "#262626",
    width: "100%",
  },
  cardTextContent: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  carouselImage: {
    width: 250,
    aspectRatio: 4 / 3,
    borderRadius: 12,
  },
  postImageContainer: {
    marginTop: 10,
  },
  postImageScrollContent: {
    paddingRight: 10,
    gap: 10,
  },
  postInfo: {
    flexDirection: "row",
    gap: 20,
    marginTop: 6,
  },
  actionIcon: {
    color: "#FFFFFF",
  },
  actionCount: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
