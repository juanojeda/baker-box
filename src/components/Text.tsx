import * as React from "react";
import { styled } from "@linaria/react";
import { FontStyleName, FontStyle, theme, getSpacing } from "../theme";

interface TextProps {
  children: React.ReactNode;
  fontStyle: FontStyleName;
  as: keyof JSX.IntrinsicElements
}

const TextWrapper = styled.div<{ fontConfig: FontStyle, as: keyof JSX.IntrinsicElements }>`
  font-family: ${({ fontConfig }) => fontConfig.font};
  font-size: ${({ fontConfig }) => fontConfig.fontSize};
  font-weight: ${({ fontConfig }) => fontConfig.fontWeight};
  line-height: ${({ fontConfig }) => fontConfig.lineHeight};
  letter-spacing: ${({ fontConfig }) => fontConfig.letterSpacing};
  margin-bottom: ${getSpacing(3, theme)};

  &::after {
    border-bottom: ${({ as }) => as === "h1" ? `4px solid ${theme.colors.light.colorTertiary}` : "none"};
    content: "";
    display: block;
    padding-bottom: ${getSpacing(1, theme)};
    width: 50%;

  }
`;

export const Text = ({ fontStyle, children, as }: TextProps) => (<TextWrapper fontConfig={theme.typography[fontStyle]} as={as}>{children}</TextWrapper>);
