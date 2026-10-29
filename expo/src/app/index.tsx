import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { BambooFrame } from "../components/Decor";
import { useAppTheme } from "../theme";

export default function HomeScreen() {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.screenContainer}>
      <View style={styles.homeContent}>
        <BambooFrame style={styles.logoFrame}>
          <View style={styles.logoCard}>
            <Image
              source={require("../../assets/bamboo-logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </BambooFrame>

        <Link href="/discover" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>get swiping</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

function createStyles(colors: ReturnType<typeof useAppTheme>["colors"]) {
  return StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: "transparent",
    },
    homeContent: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 54,
      paddingHorizontal: 48,
      paddingVertical: 48,
    },
    logoFrame: {
      width: 270,
      height: 270,
      marginVertical: 24,
      marginHorizontal: 0,
    },
    logoCard: {
      width: "100%",
      height: 270,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 7,
      backgroundColor: colors.card,
      padding: 24,
    },
    logo: {
      width: "100%",
      height: "100%",
    },
    primaryButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      borderRadius: 8,
      paddingVertical: 13,
      minHeight: 48,
      minWidth: 190,
      gap: 10,
      shadowColor: "#293b2b",
      shadowOpacity: 0.15,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 4 },
      elevation: 3,
    },
    primaryButtonText: {
      color: colors.onPrimary,
      fontWeight: "700",
      fontSize: 15,
      textTransform: "lowercase",
    },
    arrow: {
      color: colors.onPrimary,
      fontSize: 18,
    },
  });
}
