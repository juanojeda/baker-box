import { Palette } from "../constants/palette";
import { Theme } from "../types";

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
  spacing: {
    minUnit: 0.5,
    gridSize: 16,
    maxUnit: 4
  },
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

export const getSpacing = (units: number, { spacing }: Theme): string => {
  if (units > spacing.maxUnit || units < spacing.minUnit) {
    throw new Error(
      `Spacing error: spacing must be between minUnit and maxUnit (${spacing.minUnit}, ${spacing.maxUnit})`
    );
  }

  return `${units * spacing.gridSize}px`;
};
