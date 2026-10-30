import React from "react";
import { StyleSheet, Text, TouchableOpacity, TextInput, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ConversationItem from "../../components/ConversationItem";
import { CONVERSATIONS } from "../../data/conversationsData";

export default function Messages() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* SECTION 1: HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <Ionicons name="create-outline" size={28} color="#FFFFFF" />
      </View>

      <View style={styles.messagesSearching}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#777777" />
          <TextInput placeholder="Search" placeholderTextColor="#777777" style={styles.searchInput} />
        </View>
        <ScrollView 
        contentContainerStyle={styles.searchFilters}
        horizontal
        >
          <Ionicons name="reorder-three-outline" size={20} style={styles.pillOutline} />
          <Text style={[styles.pillIsActive, styles.pillOutline]}>Inbox</Text>
          <Text style={styles.pillOutline}>Live Chats</Text>
          <Text style={styles.pillOutline}>Requests</Text>
          <Text style={styles.pillOutline}>Requests</Text>
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {CONVERSATIONS.map((chat) => (
          <ConversationItem
            key={chat.id}
            avatar={chat.avatar}
            username={chat.username}
            lastMessage={chat.lastMessage}
            time={chat.time}
          />
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
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: -0.5,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  messagesSearching: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#161616",
    marginHorizontal: 15,
    borderRadius: 14,
    paddingHorizontal: 10,
  },
  searchFilters: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    justifyContent: "space-evenly",
    gap: 8,
  },
  pillOutline: {
    color: "#FFFFFF",
    borderRadius: 16,
    borderColor: "#262626",
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  pillIsActive: {
    backgroundColor: "#1E1E1E",
  },
  searchInput: {
    fontSize: 18,
  },
});