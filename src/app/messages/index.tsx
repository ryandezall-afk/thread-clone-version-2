// Assignment 2 - Threads Clone
// Screen 2: Messages Screen (Search bar, sticky category filters, conversation list)

import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ConversationItem from "../../components/ConversationItem";
import { CONVERSATIONS } from "../../data/conversationsData";

export default function Messages() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
      >
        {/* Child 0: Messages Header & Search Bar (scrolls away) */}
        <View style={styles.headerGroup}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Messages</Text>
            <Ionicons name="create-outline" size={28} color="#FFFFFF" />
          </View>

          <View style={styles.searchContainer}>
            <Ionicons name="search" size={18} color="#777777" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#777777"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* Child 1: Sticky Filter Pills (stays pinned at top) */}
        <View style={styles.stickyFilterContainer}>
          <ScrollView
            contentContainerStyle={styles.searchFilters}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Ionicons
              name="reorder-three-outline"
              size={20}
              style={styles.pillOutline}
            />
            <Text style={[styles.pillIsActive, styles.pillOutline]}>Inbox</Text>
            <Text style={styles.pillOutline}>Live Chats</Text>
            <Text style={styles.pillOutline}>Requests</Text>
          </ScrollView>
        </View>

        {/* Child 2: Conversations List */}
        {CONVERSATIONS.map((chat) => (
          <ConversationItem key={chat.id} conversation={chat} />
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
  headerGroup: {
    gap: 10,
    marginBottom: 6,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: -0.5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#161616",
    marginHorizontal: 16,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 8,
  },
  stickyFilterContainer: {
    backgroundColor: "#000000",
    width: "100%",
    paddingVertical: 8,
  },
  searchFilters: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
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
  scrollContent: {
    paddingBottom: 60,
  },
});
