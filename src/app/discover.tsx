import { StyleSheet, Text, View } from "react-native";

import { InkSeal } from "../components/Decor";
import { useAppTheme } from "../theme";

export default function DiscoverScreen() {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headingRow}>
        <InkSeal glyph="竹" />
        <Text style={styles.pageTitle}>Discover</Text>
        <InkSeal glyph="竹" />
      </View>
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateTitle}>No profiles yet</Text>
        <Text style={styles.emptyStateText}>
          Panda profiles will appear here when they are available.
        </Text>
      </View>
    </View>
  );
}

function createStyles(colors: ReturnType<typeof useAppTheme>["colors"]) {
  return StyleSheet.create({
    screenContainer: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 5,
      backgroundColor: "transparent",
      paddingBottom: 0,
    },
    header: {
      alignItems: "center",
      justifyContent: "center",
      minHeight: 104,
    },
    headingRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
    },
    pageTitle: {
      fontSize: 29,
      fontWeight: "800",
      color: colors.ink,
      textAlign: "center",
    },
    metaText: {
      fontSize: 12,
      color: colors.muted,
      fontWeight: "600",
      marginTop: 4,
    },
    meanderDivider: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      marginTop: 10,
    },
    dividerRule: {
      height: 1,
      flex: 1,
      backgroundColor: `${colors.primary}66`,
    },
    dividerGlyph: {
      color: colors.primary,
      fontSize: 14,
    },
    cardFrame: {
      flexShrink: 1,
      marginTop: 17,
      marginBottom: 19,
    },
    cardImage: {
      width: "100%",
      height: 260,
    },
    cardContent: {
      backgroundColor: colors.card,
    },
    photoButton: {
      position: "relative",
    },
    cardInfo: {
      backgroundColor: colors.cardOverlay,
      borderTopWidth: 2,
      borderTopColor: colors.primary,
      paddingHorizontal: 16,
      paddingTop: 11,
      paddingBottom: 12,
    },
    cardName: {
      color: colors.ink,
      fontSize: 24,
      fontWeight: "800",
    },
    cardZoo: {
      color: colors.primary,
      fontSize: 11,
      fontWeight: "600",
      marginTop: 3,
    },
    cardBio: {
      color: colors.ink,
      fontSize: 12,
      lineHeight: 17,
      marginTop: 6,
    },
    profilePeek: {
      position: "absolute",
      top: 10,
      right: 10,
      width: 32,
      height: 32,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(36,42,36,0.76)",
      borderRadius: 999,
    },
    tagWrap: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 5,
      marginTop: 8,
    },
    tagPill: {
      backgroundColor: colors.secondary,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: 3,
      paddingHorizontal: 7,
      paddingVertical: 3,
    },
    tagText: {
      color: colors.primary,
      fontWeight: "600",
      fontSize: 10,
    },
    actionRow: {
      position: "absolute",
      left: 0,
      right: 0,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 22,
    },
    actionButton: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 999,
      width: 56,
      height: 56,
      shadowColor: "#293b2b",
      shadowOpacity: 0.16,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
      elevation: 3,
    },
    passButton: {
      backgroundColor: colors.card,
      borderWidth: 2,
      borderColor: colors.border,
    },
    likeButton: {
      backgroundColor: colors.lucky,
      width: 64,
      height: 64,
    },
    emptyState: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.card,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: colors.primary,
      padding: 28,
    },
    emptyStateTitle: {
      color: colors.primary,
      fontSize: 24,
      fontWeight: "800",
      marginBottom: 10,
    },
    emptyStateText: {
      color: colors.muted,
      fontSize: 15,
      textAlign: "center",
      lineHeight: 22,
    },
    modalBackdrop: {
      flex: 1,
      backgroundColor: "rgba(14, 18, 15, 0.42)",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 24,
    },
    modalCard: {
      width: "100%",
      backgroundColor: colors.card,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: colors.primary,
      padding: 26,
      alignItems: "center",
    },
    modalEmoji: {
      fontSize: 42,
      marginBottom: 6,
    },
    modalTitle: {
      color: colors.primary,
      fontSize: 28,
      fontWeight: "800",
    },
    modalText: {
      marginTop: 10,
      color: colors.ink,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 24,
    },
    modalActions: {
      flexDirection: "row",
      marginTop: 22,
      width: "100%",
      gap: 10,
    },
    modalSecondary: {
      flex: 1,
      backgroundColor: colors.secondary,
      borderRadius: 5,
      paddingVertical: 14,
      alignItems: "center",
    },
    modalSecondaryText: {
      color: colors.primary,
      fontWeight: "700",
      fontSize: 15,
    },
    modalPrimary: {
      flex: 1,
      backgroundColor: colors.primary,
      borderRadius: 5,
      paddingVertical: 14,
      alignItems: "center",
    },
    modalPrimaryText: {
      color: colors.onPrimary,
      fontWeight: "700",
      fontSize: 15,
    },
  });
}
