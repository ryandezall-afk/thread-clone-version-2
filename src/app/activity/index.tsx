import { ActivityItem } from "@/components/ActivityItem";
import { ACTIVITY_SECTIONS } from "@/data/activitiesData";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ActivityScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
      >
        {/* Child 0: Big Activity title that scrolls up and away */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Activity</Text>
        </View>

        {/* Child 1: Sticky Filter Pills that stay pinned at the top */}
        <View style={styles.stickyFilterContainer}>
          <ScrollView
            contentContainerStyle={styles.searchFilters}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Text style={[styles.pillIsActive, styles.pillOutline]}>All</Text>
            <Text style={styles.pillOutline}>Follows</Text>
            <Text style={styles.pillOutline}>Conversations</Text>
            <Text style={styles.pillOutline}>Mentions</Text>
            <Text style={styles.pillOutline}>People you follow</Text>
            <Text style={styles.pillOutline}>Reposts</Text>
          </ScrollView>
        </View>

        {/* Child 2: Activity sections list */}
        {ACTIVITY_SECTIONS.map((section) => (
          <View key={section.title}>
            <Text style={styles.sectionTitle}>{section.title}</Text>

            {section.data.map((item) => (
              <ActivityItem
                key={item.id}
                activity={item}
                onPress={
                  item.post
                    ? () => router.push(`/thread/${item.post?.id}` as any)
                    : undefined
                }
              />
            ))}
          </View>
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
    paddingTop: 8,
    paddingBottom: 4,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: -0.5,
    paddingHorizontal: 16,
  },
  stickyFilterContainer: {
    backgroundColor: "#000000",
    width: "100%",
    paddingVertical: 8,
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
  searchFilters: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-evenly",
    gap: 8,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
});
