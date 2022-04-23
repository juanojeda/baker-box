enum Palette {
  primaryLight = "#914c00",
  onPrimaryLight = "#ffffff",
  primaryContainerLight = "#ffdcc1",
  onPrimaryContainerLight = "#2f1400",
  secondaryLight = "#745944",
  onSecondaryLight = "#ffffff",
  secondaryContainerLight = "#ffdcc2",
  onSecondaryContainerLight = "#2a1707",
  tertiaryLight = "#5c6236",
  onTertiaryLight = "#ffffff",
  tertiaryContainerLight = "#e1e7b0",
  onTertiaryContainerLight = "#1a1e00",
  errorLight = "#ba1b1b",
  onErrorLight = "#ffffff",
  errorContainerLight = "#ffdad4",
  onErrorContainerLight = "#410001",
  outlineLight = "#847469",
  backgroundLight = "#fcfcfc",
  onBackgroundLight = "#201a17",
  surfaceLight = "#fcfcfc",
  onSurfaceLight = "#201a17",
  surfaceVariantLight = "#f3dfd2",
  onSurfaceVariantLight = "#51443b",
  inverseSurfaceLight = "#352f2b",
  inverseOnSurfaceLight = "#faeee7",
  primaryDark = "#ffb77a",
  onPrimaryDark = "#4e2600",
  primaryContainerDark = "#6f3900",
  onPrimaryContainerDark = "#ffdcc1",
  secondaryDark = "#e4c0a6",
  onSecondaryDark = "#422c1a",
  secondaryContainerDark = "#5a422e",
  onSecondaryContainerDark = "#ffdcc2",
  tertiaryDark = "#c5cb96",
  onTertiaryDark = "#2e330d",
  tertiaryContainerDark = "#454a21",
  onTertiaryContainerDark = "#e1e7b0",
  errorDark = "#ffb4a9",
  onErrorDark = "#680003",
  errorContainerDark = "#930006",
  onErrorContainerDark = "#ffdad4",
  outlineDark = "#9e8d82",
  backgroundDark = "#201a17",
  onBackgroundDark = "#ece0da",
  surfaceDark = "#201a17",
  onSurfaceDark = "#ece0da",
  surfaceVariantDark = "#51443b",
  onSurfaceVariantDark = "#d6c3b6",
  inverseSurfaceDark = "#ece0da",
  inverseOnSurfaceDark = "#201a17"
}

export interface FontStyle {
  font: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

export interface Theme {
  colors: {
    light: {
      [colorKey: string]: Palette;
    };
    dark: {
      [colorKey: string]: Palette;
    };
  };
  spacing: {};
  typography: {
    [fontKey: string]: FontStyle;
  };
}

export const theme: Theme = {
  colors: {
    light: {
      colorPrimary: Palette.primaryLight,
      colorOnPrimary: Palette.onPrimaryLight,
      colorPrimaryContainer: Palette.primaryContainerLight,
      colorOnPrimaryContainer: Palette.onPrimaryContainerLight,
      colorSecondary: Palette.secondaryLight,
      colorOnSecondary: Palette.onSecondaryLight,
      colorSecondaryContainer: Palette.secondaryContainerLight,
      colorOnSecondaryContainer: Palette.onSecondaryContainerLight,
      colorTertiary: Palette.tertiaryLight,
      colorOnTertiary: Palette.onTertiaryLight,
      colorTertiaryContainer: Palette.tertiaryContainerLight,
      colorOnTertiaryContainer: Palette.onTertiaryContainerLight,
      colorError: Palette.errorLight,
      colorOnError: Palette.onErrorLight,
      colorErrorContainer: Palette.errorContainerLight,
      colorOnErrorContainer: Palette.onErrorContainerLight,
      colorOutline: Palette.outlineLight,
      colorBackground: Palette.backgroundLight,
      colorOnBackground: Palette.onBackgroundLight,
      colorSurface: Palette.surfaceLight,
      colorOnSurface: Palette.onSurfaceLight,
      colorSurfaceVariant: Palette.surfaceVariantLight,
      colorOnSurfaceVariant: Palette.onSurfaceVariantLight,
      colorInverseSurface: Palette.inverseSurfaceLight,
      colorInverseOnSurface: Palette.inverseOnSurfaceLight
    },
    dark: {
      primary: Palette.primaryDark,
      onPrimary: Palette.onPrimaryDark,
      primaryContainer: Palette.primaryContainerDark,
      onPrimaryContainer: Palette.onPrimaryContainerDark,
      secondary: Palette.secondaryDark,
      onSecondary: Palette.onSecondaryDark,
      secondaryContainer: Palette.secondaryContainerDark,
      onSecondaryContainer: Palette.onSecondaryContainerDark,
      tertiary: Palette.tertiaryDark,
      onTertiary: Palette.onTertiaryDark,
      tertiaryContainer: Palette.tertiaryContainerDark,
      onTertiaryContainer: Palette.onTertiaryContainerDark,
      error: Palette.errorDark,
      onError: Palette.onErrorDark,
      errorContainer: Palette.errorContainerDark,
      onErrorContainer: Palette.onErrorContainerDark,
      outline: Palette.outlineDark,
      background: Palette.backgroundDark,
      onBackground: Palette.onBackgroundDark,
      surface: Palette.surfaceDark,
      onSurface: Palette.onSurfaceDark,
      surfaceVariant: Palette.surfaceVariantDark,
      onSurfaceVariant: Palette.onSurfaceVariantDark,
      inverseSurface: Palette.inverseSurfaceDark,
      inverseOnSurface: Palette.inverseOnSurfaceDark
    }
  },
  spacing: {},
  typography: {
    display1: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "64px",
      lineHeight: "76px",
      letterSpacing: "-0.5px"
    },
    display2: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "57px",
      lineHeight: "64px",
      letterSpacing: "-0.25px"
    },
    display3: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "45px",
      lineHeight: "52px",
      letterSpacing: "0px"
    },
    headline1: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "36px",
      lineHeight: "44px",
      letterSpacing: "0px"
    },
    headline2: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "0px"
    },
    headline3: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "28px",
      lineHeight: "36px",
      letterSpacing: "0px"
    },
    headline4: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "0px"
    },
    headline5: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "22px",
      lineHeight: "28px",
      letterSpacing: "0px"
    },
    headline6: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "0px"
    },
    subhead1: {
      font: "Roboto",
      fontWeight: "Medium",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.1px"
    },
    subhead2: {
      font: "Roboto",
      fontWeight: "Medium",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.1px"
    },
    body1: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.5px"
    },
    body2: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px"
    },
    caption: {
      font: "Roboto",
      fontWeight: "Regular",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.4px"
    },
    button: {
      font: "Roboto",
      fontWeight: "Medium",
      fontSize: "14px",
      lineHeight: " 20px",
      letterSpacing: "0.1px"
    },
    overline: {
      font: "Roboto",
      fontWeight: "Medium",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.5px"
    }
  }
};

export type FontStyleName = keyof typeof theme.typography;
