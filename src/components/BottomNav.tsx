import { MaterialCommunityIcons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useAppTheme } from "../theme";
import { BambooTabStripe } from "./Decor";

const tabs = [
  {
    key: "discover",
    label: "Discover",
    href: "/discover",
    icon: "compass-outline",
  },
  { key: "matches", label: "Matches", href: "/matches", icon: "heart-outline" },
  { key: "mood", label: "Mood", href: "/mood", icon: "fire" },
  {
    key: "account",
    label: "Account",
    href: "/account",
    icon: "account-outline",
  },
] as const;

export function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  if (pathname === "/") {
    return null;
  }

  const safeBottom = Math.max(insets.bottom, 12);

  return (
    <View style={[styles.tabBar, { height: 83 + safeBottom }]}>
      <View style={[styles.tabButtons, { bottom: safeBottom }]}>
        {tabs.map((tab) => {
          const isActive =
            pathname === tab.href ||
            (tab.href === "/discover" && pathname === "/profile");
          return (
            <Pressable
              key={tab.key}
              onPress={() => router.push(tab.href)}
              style={[styles.tabButton, isActive && styles.tabButtonActive]}
            >
              <MaterialCommunityIcons
                name={tab.icon}
                size={21}
                color={isActive ? colors.primary : colors.muted}
              />
              <Text
                style={[styles.tabLabel, isActive && styles.tabLabelActive]}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <BambooTabStripe />
    </View>
  );
}

function createStyles(colors: ReturnType<typeof useAppTheme>["colors"]) {
  return StyleSheet.create({
    tabBar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.card,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      zIndex: 10,
    },
    tabButtons: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 83,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      paddingHorizontal: 4,
      paddingTop: 8,
      shadowColor: "#293b2b",
      shadowOpacity: 0.12,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: -4 },
      elevation: 12,
    },
    tabButton: {
      alignItems: "center",
      justifyContent: "center",
      height: 54,
      flex: 1,
      minWidth: 0,
      borderRadius: 6,
      gap: 3,
    },
    tabButtonActive: {
      backgroundColor: colors.secondary,
    },
    tabLabel: {
      fontSize: 12,
      color: colors.muted,
      fontWeight: "700",
    },
    tabLabelActive: {
      color: colors.primary,
    },
  });
}
