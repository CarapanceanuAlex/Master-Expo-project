import { Slot, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { BottomNav } from "../components/BottomNav";
import { BambooCanopy, SumiBackdrop } from "../components/Decor";
import { ThemeProvider, useAppTheme } from "../theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

function AppShell() {
  const pathname = usePathname();
  const { isDark, colors } = useAppTheme();
  const showCanopy = pathname !== "/" && !pathname.startsWith("/chat/");
  const styles = createStyles(colors.background);

  return (
    <View style={styles.appShell}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <SumiBackdrop />
      {showCanopy && <BambooCanopy />}
      <SafeAreaView style={styles.safeContent} edges={["top", "left", "right"]}>
        <View style={styles.contentTopSpacing} />
        <Slot />
        <BottomNav />
      </SafeAreaView>
    </View>
  );
}

function createStyles(background: string) {
  return StyleSheet.create({
    appShell: {
      flex: 1,
      backgroundColor: background,
      width: "100%",
      maxWidth: 448,
      alignSelf: "center",
      overflow: "hidden",
    },
    safeContent: {
      flex: 1,
      backgroundColor: "transparent",
    },
    contentTopSpacing: {
      height: 42,
    },
  });
}
