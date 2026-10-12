import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { InkSeal } from "../components/Decor";
import { useAppTheme } from "../theme";

export default function MoodScreen() {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.heading}>
        <Lantern />
        <Text style={styles.title}>Mood Lounge</Text>
        <Lantern />
      </View>

      <View style={styles.subtitleRow}>
        <InkSeal glyph="春" />
        <MaterialCommunityIcons
          name="eye-off-outline"
          size={17}
          color={colors.muted}
        />
        <Text style={styles.subtitle}>
          For panda eyes only. Humans, look away.
        </Text>
      </View>

      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerGlyph}>福</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.emptyState}>
        <Text style={styles.emptyStateTitle}>Nothing here yet</Text>
        <Text style={styles.emptyStateText}>
          Real recommendations will appear here when they are available.
        </Text>
      </View>
    </ScrollView>
  );
}

function Lantern() {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.lantern}>
      <MaterialCommunityIcons name="lamp" size={18} color="#fff4d4" />
    </View>
  );
}

function createStyles(colors: ReturnType<typeof useAppTheme>["colors"]) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "transparent",
    },
    content: {
      paddingHorizontal: 24,
      paddingBottom: 138,
    },
    heading: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      paddingTop: 12,
    },
    title: {
      color: colors.ink,
      fontSize: 28,
      fontWeight: "800",
    },
    lantern: {
      width: 32,
      height: 32,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.lucky,
      borderRadius: 999,
      shadowColor: colors.lucky,
      shadowOpacity: 0.28,
      shadowRadius: 9,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3,
    },
    subtitleRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginTop: 10,
    },
    subtitle: {
      color: colors.muted,
      fontSize: 12,
      flexShrink: 1,
    },
    divider: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      marginTop: 17,
      marginBottom: 24,
    },
    emptyState: {
      backgroundColor: colors.card,
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 7,
      padding: 28,
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
    dividerLine: {
      height: 1,
      flex: 1,
      backgroundColor: `${colors.primary}66`,
    },
    dividerGlyph: {
      color: colors.primary,
      fontSize: 14,
    },
    videoCard: {
      overflow: "hidden",
      marginBottom: 25,
      backgroundColor: colors.card,
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 7,
      shadowColor: "#293b2b",
      shadowOpacity: 0.16,
      shadowRadius: 13,
      shadowOffset: { width: 0, height: 7 },
      elevation: 3,
    },
    player: {
      aspectRatio: 16 / 9,
      backgroundColor: "#111",
    },
    poster: {
      flex: 1,
      justifyContent: "space-between",
    },
    posterShade: {
      ...StyleSheet.absoluteFill,
      backgroundColor: "rgba(11,16,12,0.23)",
    },
    playerTopRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 11,
      paddingTop: 10,
    },
    tag: {
      backgroundColor: colors.lucky,
      borderRadius: 999,
      paddingHorizontal: 11,
      paddingVertical: 5,
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    },
    tagText: {
      color: "#fff8e9",
      fontSize: 11,
      fontWeight: "800",
    },
    moreButton: {
      width: 31,
      height: 31,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 999,
      backgroundColor: "rgba(0,0,0,0.38)",
    },
    playButton: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 58,
      height: 58,
      marginLeft: -29,
      marginTop: -29,
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 4,
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.85)",
      borderRadius: 999,
      backgroundColor: "rgba(164,68,47,0.9)",
    },
    playerBottom: {
      paddingHorizontal: 11,
      paddingBottom: 8,
    },
    progressTrack: {
      height: 3,
      backgroundColor: "rgba(255,255,255,0.48)",
      borderRadius: 3,
    },
    progress: {
      width: "24%",
      height: 3,
      borderRadius: 3,
      backgroundColor: colors.lucky,
    },
    controls: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 5,
    },
    controlGroup: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    controlButton: {
      width: 27,
      height: 25,
      alignItems: "center",
      justifyContent: "center",
    },
    duration: {
      color: "#fff",
      fontSize: 10,
      fontVariant: ["tabular-nums"],
    },
    videoInfo: {
      paddingHorizontal: 16,
      paddingVertical: 15,
      gap: 6,
    },
    videoTitleRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    videoTitle: {
      flex: 1,
      color: colors.ink,
      fontSize: 16,
      fontWeight: "800",
    },
    description: {
      color: colors.muted,
      fontSize: 12,
      lineHeight: 18,
    },
    footerDivider: {
      flexDirection: "row",
      alignItems: "center",
      gap: 9,
      marginTop: 2,
      marginBottom: 12,
    },
    inkMark: {
      flex: 1,
      height: 1,
      backgroundColor: `${colors.ink}66`,
    },
    inkGlyph: {
      color: colors.ink,
      fontSize: 12,
    },
    footer: {
      paddingHorizontal: 8,
      paddingBottom: 12,
      color: colors.muted,
      fontSize: 11,
      lineHeight: 16,
      textAlign: "center",
    },
  });
}
