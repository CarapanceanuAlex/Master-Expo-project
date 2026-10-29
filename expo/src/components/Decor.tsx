import { Image, StyleSheet, Text, View } from "react-native";

import { useAppTheme } from "../theme";

export function SumiBackdrop() {
  const { isDark } = useAppTheme();
  return (
    <View pointerEvents="none" style={styles.sumiContainer}>
      <Image
        source={require("../../assets/sumi-backdrop.png")}
        resizeMode="cover"
        style={[styles.sumi, isDark && styles.sumiDark]}
      />
    </View>
  );
}

export function BambooCanopy() {
  const { colors } = useAppTheme();
  return (
    <View
      pointerEvents="none"
      style={[styles.canopy, { borderTopColor: colors.primary }]}
    >
      <Image
        source={require("../../assets/bamboo-corner.png")}
        resizeMode="contain"
        style={styles.corner}
      />
      <Image
        source={require("../../assets/bamboo-corner.png")}
        resizeMode="contain"
        style={[styles.corner, styles.cornerRight]}
      />
    </View>
  );
}

export function BambooFrame({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) {
  const { colors } = useAppTheme();
  const frameStyles = createFrameStyles(colors);
  return (
    <View style={[frameStyles.frame, style]}>
      <View pointerEvents="none" style={frameStyles.strips}>
        <View style={[frameStyles.horizontalStrip, frameStyles.topStrip]}>
          {Array.from({ length: 8 }, (_, index) => (
            <Image
              key={index}
              source={require("../../assets/bamboo-border.png")}
              style={frameStyles.horizontalImage}
            />
          ))}
        </View>
        <View style={[frameStyles.horizontalStrip, frameStyles.bottomStrip]}>
          {Array.from({ length: 8 }, (_, index) => (
            <Image
              key={index}
              source={require("../../assets/bamboo-border.png")}
              style={frameStyles.horizontalImage}
            />
          ))}
        </View>
        <View style={[frameStyles.verticalStrip, frameStyles.leftStrip]}>
          {Array.from({ length: 16 }, (_, index) => (
            <Image
              key={index}
              source={require("../../assets/bamboo-border-v.png")}
              style={frameStyles.verticalImage}
            />
          ))}
        </View>
        <View style={[frameStyles.verticalStrip, frameStyles.rightStrip]}>
          {Array.from({ length: 16 }, (_, index) => (
            <Image
              key={index}
              source={require("../../assets/bamboo-border-v.png")}
              style={frameStyles.verticalImage}
            />
          ))}
        </View>
      </View>
      <View style={frameStyles.outerBorder}>
        <View style={frameStyles.innerBorder}>{children}</View>
      </View>
    </View>
  );
}

export function BambooTabStripe() {
  return (
    <View pointerEvents="none" style={styles.tabStripe}>
      {Array.from({ length: 5 }, (_, index) => (
        <Image
          key={index}
          source={require("../../assets/bamboo-border-tight.png")}
          style={styles.tabStripeImage}
        />
      ))}
    </View>
  );
}

export function InkSeal({ glyph }: { glyph: string }) {
  const { colors } = useAppTheme();
  const styles = createSealStyles(colors);
  return (
    <View accessible={false} style={styles.inkSeal}>
      <Text style={styles.inkSealGlyph}>{glyph}</Text>
    </View>
  );
}

const staticStyles = StyleSheet.create({
  sumiContainer: {
    ...StyleSheet.absoluteFill,
  },
  sumi: {
    width: "100%",
    height: "100%",
    opacity: 0.4,
  },
  sumiDark: {
    opacity: 0.4,
    filter: [{ invert: 1 }],
  },
  canopy: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 44,
    zIndex: 2,
  },
  corner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 76,
    height: 76,
  },
  cornerRight: {
    left: undefined,
    right: 0,
    transform: [{ scaleX: -1 }],
  },
  frame: {
    position: "relative",
    marginHorizontal: 10,
    marginVertical: 24,
  },
  strips: {
    ...StyleSheet.absoluteFill,
    zIndex: 3,
  },
  horizontalImage: {
    width: 76,
    height: 38,
  },
  verticalImage: {
    width: 38,
    height: 76,
  },
  horizontalStrip: {
    position: "absolute",
    left: -4,
    right: -4,
    height: 38,
    zIndex: 3,
    flexDirection: "row",
    overflow: "hidden",
  },
  topStrip: {
    top: -23,
  },
  bottomStrip: {
    bottom: -23,
    transform: [{ scaleY: -1 }],
  },
  verticalStrip: {
    position: "absolute",
    top: -4,
    bottom: -4,
    width: 38,
    zIndex: 3,
    flexDirection: "column",
    overflow: "hidden",
  },
  leftStrip: {
    left: -23,
  },
  rightStrip: {
    right: -23,
    transform: [{ scaleX: -1 }],
  },
  tabStripe: {
    position: "absolute",
    top: -16,
    left: 0,
    right: 0,
    height: 24,
    overflow: "hidden",
    flexDirection: "row",
  },
  tabStripeImage: {
    width: 133,
    height: 24,
  },
  inkSeal: {
    width: 36,
    height: 36,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#202620",
    borderRadius: 3,
    backgroundColor: "#202620",
    shadowColor: "#000000",
    shadowOpacity: 0.18,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  inkSealGlyph: {
    color: "#fffefb",
    fontSize: 19,
    fontWeight: "800",
  },
});

const styles = staticStyles;

function createFrameStyles(colors: ReturnType<typeof useAppTheme>["colors"]) {
  return StyleSheet.create({
    frame: staticStyles.frame,
    strips: staticStyles.strips,
    horizontalImage: staticStyles.horizontalImage,
    verticalImage: staticStyles.verticalImage,
    horizontalStrip: staticStyles.horizontalStrip,
    topStrip: staticStyles.topStrip,
    bottomStrip: staticStyles.bottomStrip,
    verticalStrip: staticStyles.verticalStrip,
    leftStrip: staticStyles.leftStrip,
    rightStrip: staticStyles.rightStrip,
    outerBorder: {
      borderWidth: 1,
      borderColor: colors.accent,
      borderRadius: 11,
      padding: 3,
      backgroundColor: colors.card,
      shadowColor: "#293b2b",
      shadowOpacity: 0.18,
      shadowRadius: 17,
      shadowOffset: { width: 0, height: 10 },
      elevation: 5,
    },
    innerBorder: {
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 7,
      overflow: "hidden",
      backgroundColor: colors.card,
    },
  });
}

function createSealStyles(colors: ReturnType<typeof useAppTheme>["colors"]) {
  return StyleSheet.create({
    inkSeal: {
      ...staticStyles.inkSeal,
      borderColor: colors.ink,
      backgroundColor: colors.ink,
    },
    inkSealGlyph: { ...staticStyles.inkSealGlyph, color: colors.card },
  });
}
