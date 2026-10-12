import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { InkSeal } from "../components/Decor";
import { useAppTheme } from "../theme";

export default function MatchesScreen() {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  return (
    <ScrollView
      style={styles.screenContainer}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.headingRow}>
        <InkSeal glyph="囍" />
        <View style={styles.headingText}>
          <Text style={styles.pageTitle}>Your Matches</Text>
          <Text style={styles.metaText}>Your matches will appear here.</Text>
        </View>
        <InkSeal glyph="囍" />
      </View>
      <View style={styles.meanderDivider}>
        <View style={styles.rule} />
        <Text style={styles.dividerGlyph}>福</Text>
        <View style={styles.rule} />
      </View>

      <View style={styles.emptyState}>
        <Text style={styles.emptyStateTitle}>No matches yet</Text>
        <Text style={styles.emptyStateText}>
          Matches will appear here once profiles are available.
        </Text>
      </View>

      <Link href="/discover" style={styles.footerLink}>
        Back to Discover
      </Link>
    </ScrollView>
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
    pageTitle: {
      fontSize: 29,
      fontWeight: "800",
      color: colors.ink,
      marginBottom: 8,
      textAlign: "center",
    },
    headingRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      paddingTop: 12,
      marginBottom: 10,
    },
    headingText: {
      alignItems: "center",
      flexShrink: 1,
    },
    metaText: {
      color: colors.muted,
      fontSize: 13,
      marginBottom: 18,
      textAlign: "center",
    },
    meanderDivider: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      marginBottom: 20,
    },
    rule: {
      height: 1,
      flex: 1,
      backgroundColor: `${colors.primary}66`,
    },
    dividerGlyph: {
      color: colors.primary,
      fontSize: 14,
    },
    matchRow: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: 7,
      borderWidth: 2,
      borderColor: colors.primary,
      padding: 12,
      marginBottom: 14,
      shadowColor: "#293b2b",
      shadowOpacity: 0.12,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 8 },
    },
    matchThumb: {
      width: 60,
      height: 60,
      borderRadius: 999,
      borderWidth: 2,
      borderColor: colors.lucky,
    },
    matchDetails: {
      flex: 1,
      marginLeft: 14,
    },
    matchName: {
      color: colors.ink,
      fontWeight: "700",
      fontSize: 18,
    },
    matchMeta: {
      color: colors.muted,
      fontSize: 13,
      marginTop: 4,
    },
    emptyState: {
      backgroundColor: colors.card,
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 7,
      padding: 30,
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
    },
    footerLink: {
      marginTop: 20,
      color: colors.primary,
      fontWeight: "700",
      textAlign: "center",
      fontSize: 15,
    },
  });
}
