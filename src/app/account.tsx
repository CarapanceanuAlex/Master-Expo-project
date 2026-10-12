import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";

import { InkSeal } from "../components/Decor";
import { useAppTheme } from "../theme";

export default function AccountScreen() {
  const { colors, isDark, setDarkMode } = useAppTheme();
  const styles = createStyles(colors);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.heading}>
        <InkSeal glyph="恋" />
        <View style={styles.headingText}>
          <Text style={styles.title}>Account</Text>
          <Text style={styles.subtitle}>
            Account profiles are not connected yet.
          </Text>
        </View>
        <InkSeal glyph="恋" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.message}>
          Profile details and traits will appear here when profile data is
          available.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.appearanceRow}>
          <MaterialCommunityIcons
            name={isDark ? "moon-waning-crescent" : "white-balance-sunny"}
            size={19}
            color={colors.primary}
          />
          <Text style={styles.appearanceText}>Dark mode</Text>
          <Switch
            value={isDark}
            onValueChange={setDarkMode}
            trackColor={{ false: colors.border, true: colors.secondary }}
            thumbColor={isDark ? colors.primary : "#f4f3ef"}
          />
        </View>
      </View>
    </ScrollView>
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
      paddingBottom: 135,
      gap: 18,
    },
    heading: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      paddingTop: 12,
    },
    headingText: {
      flex: 1,
      alignItems: "center",
    },
    title: {
      color: colors.ink,
      fontSize: 29,
      fontWeight: "800",
    },
    subtitle: {
      color: colors.muted,
      fontSize: 12,
      textAlign: "center",
      marginTop: 3,
    },
    section: {
      gap: 12,
      padding: 17,
      backgroundColor: colors.card,
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 7,
      shadowColor: "#293b2b",
      shadowOpacity: 0.1,
      shadowRadius: 9,
      shadowOffset: { width: 0, height: 5 },
      elevation: 2,
    },
    sectionTitle: {
      color: colors.ink,
      fontSize: 18,
      fontWeight: "800",
    },
    message: {
      color: colors.muted,
      fontSize: 14,
      lineHeight: 21,
    },
    appearanceRow: {
      minHeight: 44,
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    appearanceText: {
      flex: 1,
      color: colors.ink,
      fontSize: 13,
      fontWeight: "700",
    },
  });
}
