import * as React from "react";
import { styled } from "@linaria/react";
import { FontStyleName, FontStyle, theme } from "../theme";

interface TextProps {
  children: React.ReactNode;
  fontStyle: FontStyleName;
  as: keyof JSX.IntrinsicElements
}

const TextWrapper = styled.div<{ fontConfig: FontStyle }>`
  font-family: ${({ fontConfig }) => fontConfig.font};
  font-size: ${({ fontConfig }) => fontConfig.fontSize};
  font-weight: ${({ fontConfig }) => fontConfig.fontWeight};
  line-height: ${({ fontConfig }) => fontConfig.lineHeight};
  letter-spacing: ${({ fontConfig }) => fontConfig.letterSpacing};
`;

export const Text = ({ fontStyle, children, as }: TextProps) => (<TextWrapper fontConfig={theme.typography[fontStyle]} as={as}>{children}</TextWrapper>);
