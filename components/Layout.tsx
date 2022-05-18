import { css } from "linaria";
import { styled } from "linaria/react";
import * as React from "react";
import { getSpacing, theme } from "../utils/theme";

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }
    body {
      padding: 0;
      margin: 0;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`;

const Background = styled.div`
  align-items: stretch;
  background: ${theme.colors.light.colorSurface};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const LayoutInner = styled.div`
  max-width: 720px;
  padding: ${getSpacing(1, theme)};
  width: 100%;
`;

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Background>
    <LayoutInner>
      {children}
    </LayoutInner>
  </Background>
)