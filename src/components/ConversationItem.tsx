import { Conversation } from "@/data/conversationsData";
import { Image, StyleSheet, Text, View } from "react-native";

export type ConversationProps = {
  conversation: Conversation;
};

export default function ConversationItem({ conversation }: ConversationProps) {
  return (
    <View style={styles.container}>
      <Image source={conversation.avatar} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.username}>{conversation.username}</Text>
        <Text style={styles.subtext}>
          {conversation.lastMessage} · {conversation.time}
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
