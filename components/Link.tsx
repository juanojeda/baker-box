import { styled } from "linaria/react";
import * as React from "react";
import { theme } from "../utils/theme";

interface LinkProps {
  children: React.ReactNode;
  isBlock?: boolean;
  title: string;
  to: string;
}

const StyledLink = styled.a<{ isBlock: boolean }>`
  color: ${theme.colors.light.colorPrimary};
  display: ${({ isBlock }) => isBlock ? "block" : "inline"};
  text-decoration: none;
`;

export const Link = ({ to, title, children, isBlock = false }: LinkProps) => (
  <StyledLink href={to} title={title} isBlock={isBlock}>
    {children}
  </StyledLink>
)