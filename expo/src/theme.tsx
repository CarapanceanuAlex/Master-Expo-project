import React, { createContext, useContext, useMemo, useState } from "react";

export type ThemeColors = {
  background: string;
  card: string;
  primary: string;
  primaryDark: string;
  onPrimary: string;
  secondary: string;
  accent: string;
  lucky: string;
  ink: string;
  muted: string;
  border: string;
  danger: string;
  cardOverlay: string;
};

const lightTheme: ThemeColors = {
  background: "#f8faf1",
  card: "#fffefb",
  primary: "#206438",
  primaryDark: "#194a2b",
  onPrimary: "#ffffff",
  secondary: "#dcecc5",
  accent: "#c7a359",
  lucky: "#c4341b",
  ink: "#202620",
  muted: "#697267",
  border: "#c7d4b8",
  danger: "#b23e32",
  cardOverlay: "rgba(255,254,251,0.97)",
};

const darkTheme: ThemeColors = {
  background: "#171d19",
  card: "#222a24",
  primary: "#8abf91",
  primaryDark: "#6ba575",
  onPrimary: "#171d19",
  secondary: "#303e33",
  accent: "#b99b60",
  lucky: "#db725c",
  ink: "#e8eee7",
  muted: "#aab5aa",
  border: "#536354",
  danger: "#ed8578",
  cardOverlay: "rgba(34,42,36,0.97)",
};

type ThemeContextValue = {
  isDark: boolean;
  colors: ThemeColors;
  setDarkMode: (enabled: boolean) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const value = useMemo<ThemeContextValue>(
    () => ({
      isDark,
      colors: isDark ? darkTheme : lightTheme,
      setDarkMode: (enabled) => {
        setIsDark(enabled);
      },
    }),
    [isDark],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useAppTheme must be used within a ThemeProvider");
  }
  return context;
}
