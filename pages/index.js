import Layout from "../components/Layout";
import styled from "styled-components";

const Index = () => (
  <Layout>
    <Page>
      <Image />
    </Page>
    <Arange>
      <Text>
        <h4>XENIA BROWN</h4>
        <p>portrait, wedding and travel photographer</p>
        <p>in love with photography since 2009</p>
        <p>addicted to natural light</p>
        <p>for general questions, please contact me at</p>
        <p>kseniushka16@gmail.com</p>
      </Text>
      <Portrait src="../static/portrait.jpg" />
    </Arange>
  </Layout>
);

export default Index;

const Arange = styled.div`
  display: flex;
  justify-content: center;
  flex: auto;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Page = styled.div`
  display: flex;
  flex: auto;
  @media (max-width: 500px) {
    min-width: 150px;
    min-height: 200px;
  }
`;

const Image = styled.div`
  background-image: url("https://blog.infinityeventsandcatering.com/wp-content/uploads/2019/01/Lacey-Brandon_Bridge-Building-Wedding_28.jpg");
  height: 580px;
  background-position-y: 13.75%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex: auto;
  @media (max-width: 890px) {
    display: flex;
    flex: auto;
    width: 480px;
    height: 296px;
  }
  @media (max-width: 500px) {
    display: flex;
    flex: auto;
    min-width: 250px;
    min-height: 100px;
  }
`;

const Text = styled.div`
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  flex: auto;
  align-items: center;
  line-height: 5px;
  justify-content: center;
  font-family: "Didact Gothic", sans-serif;
  max-width: 400px;
  margin-top: 40px;
  margin-right: 50px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-left: 70px;
  }
`;

const Portrait = styled.img`
  display: flex;
  flex: auto;
  max-width: 362px;
  max-height: 362px;
  padding-top: 40px;
`;
