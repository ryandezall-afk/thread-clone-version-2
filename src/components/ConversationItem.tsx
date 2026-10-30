import React from "react";
import { StyleSheet, View, Text, Image, ImageSourcePropType } from "react-native";

export type ConversationProps = {
  avatar: ImageSourcePropType;
  username: string;
  lastMessage: string;
  time: string;
};

export default function ConversationItem({ avatar, username, lastMessage, time }: ConversationProps) {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.subtext}>
          {lastMessage} · {time}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 14,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  username: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtext: {
    color: "#777777",
    fontSize: 14,
  },
});