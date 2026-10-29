import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useAppTheme } from "../../theme";

export default function ChatScreen() {
  const router = useRouter();
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.replace("/matches")}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={22}
            color={colors.primary}
          />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Chat</Text>
        <View style={styles.placeholder} />
      </View>
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateTitle}>No conversation yet</Text>
        <Text style={styles.emptyStateText}>
          Chats will be available after profiles and matches are connected.
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace("/matches")}
        >
          <Text style={styles.backButtonText}>Back to Matches</Text>
        </TouchableOpacity>
      </View>
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
      paddingBottom: 110,
    },
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12,
    },
    pageTitle: {
      flex: 1,
      textAlign: "center",
      fontSize: 28,
      fontWeight: "800",
      color: colors.ink,
    },
    placeholder: {
      width: 22,
      height: 22,
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
      fontSize: 22,
      fontWeight: "800",
      marginBottom: 8,
      textAlign: "center",
    },
    emptyStateText: {
      color: colors.muted,
      fontSize: 15,
      textAlign: "center",
      lineHeight: 22,
    },
    backButton: {
      marginTop: 20,
      backgroundColor: colors.primary,
      borderRadius: 999,
      paddingHorizontal: 20,
      paddingVertical: 12,
    },
    backButtonText: {
      color: colors.onPrimary,
      fontWeight: "700",
    },
    chatList: {
      flex: 1,
    },
    chatListContent: {
      gap: 10,
      paddingBottom: 18,
    },
    bubble: {
      maxWidth: "80%",
      borderRadius: 18,
      paddingHorizontal: 14,
      paddingVertical: 10,
    },
    pandaBubble: {
      alignSelf: "flex-start",
      backgroundColor: colors.card,
      borderTopLeftRadius: 4,
      borderWidth: 1,
      borderColor: `${colors.ink}33`,
    },
    myBubble: {
      alignSelf: "flex-end",
      backgroundColor: colors.primaryDark,
      borderTopRightRadius: 4,
    },
    bubbleText: {
      color: colors.ink,
      fontSize: 15,
      lineHeight: 22,
    },
    myBubbleText: {
      color: colors.background,
    },
    chatInputRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginTop: 12,
    },
    chatInput: {
      flex: 1,
      backgroundColor: colors.card,
      borderRadius: 18,
      paddingHorizontal: 16,
      paddingVertical: 14,
      fontSize: 15,
      color: colors.ink,
    },
    sendButton: {
      width: 48,
      height: 48,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 16,
      backgroundColor: colors.lucky,
    },
  });
}
