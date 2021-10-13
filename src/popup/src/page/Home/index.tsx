import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "src/popup/src/component";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;
const Home = () => {
  const history = useHistory();

  return (
    <Layout>
      <Container>Home</Container>
    </Layout>
  );
};

export default Home;
