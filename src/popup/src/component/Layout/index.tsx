import React from "react";
import styled from "styled-components";

const Container = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : "512px")};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Layout;
