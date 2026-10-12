import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useAppTheme } from "../theme";

export default function ProfileScreen() {
  const router = useRouter();
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.pageTitle}>Profile</Text>
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateTitle}>No profile selected</Text>
        <Text style={styles.emptyStateText}>
          Profile details will appear here when profile data is connected.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.primaryButtonWide}
        onPress={() => router.replace("/discover")}
      >
        <Text style={styles.primaryButtonText}>Back to Discover</Text>
      </TouchableOpacity>
    </View>
  );
}

function createStyles(colors: ReturnType<typeof useAppTheme>["colors"]) {
  return StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: "transparent",
      paddingHorizontal: 18,
      paddingTop: 18,
    },
    scrollContent: {
      paddingBottom: 120,
    },
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    backButton: {
      width: 32,
      height: 32,
      alignItems: "center",
      justifyContent: "center",
    },
    placeholder: {
      width: 32,
      height: 32,
    },
    pageTitle: {
      fontSize: 28,
      fontWeight: "800",
      color: colors.ink,
      flex: 1,
      textAlign: "center",
      marginHorizontal: 8,
    },
    profileFrame: {
      alignSelf: "center",
      marginTop: 3,
      marginBottom: 12,
    },
    detailCard: {
      backgroundColor: colors.card,
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 7,
      padding: 18,
      marginTop: 18,
      shadowColor: "#293b2b",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
    },
    profileName: {
      color: colors.ink,
      fontSize: 28,
      fontWeight: "800",
    },
    profileZoo: {
      color: colors.primary,
      fontSize: 14,
      marginTop: 6,
      textAlign: "center",
    },
    profileBio: {
      color: colors.ink,
      fontSize: 15,
      lineHeight: 22,
      marginTop: 14,
    },
    tagWrap: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 18,
      gap: 8,
    },
    tagPill: {
      backgroundColor: colors.secondary,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: 3,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    tagText: {
      color: colors.primary,
      fontSize: 12,
      fontWeight: "700",
    },
    primaryButtonWide: {
      marginTop: 22,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      borderRadius: 999,
      paddingVertical: 16,
      minHeight: 52,
      gap: 8,
    },
    primaryButtonText: {
      color: colors.onPrimary,
      fontWeight: "700",
      fontSize: 16,
    },
    emptyState: {
      backgroundColor: colors.card,
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 7,
      padding: 28,
      marginTop: 20,
      alignItems: "center",
    },
    emptyStateTitle: {
      color: colors.primary,
      fontSize: 22,
      fontWeight: "800",
      marginBottom: 8,
    },
    emptyStateText: {
      color: colors.muted,
      fontSize: 15,
      textAlign: "center",
      lineHeight: 22,
    },
  });
}
