import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Slider from "./components/layout/Slider";
import Image from "./components/layout/Image";
import ImgText from "./components/layout/ImgText";
import Card from "./components/layout/Card";
import Banner from "./components/layout/Banner";
import Text from "./components/layout/Text";
import Footer from "./components/layout/Footer";
import Contents from "./components/layout/Contents";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Contents>
        <Slider fonts="nexon" />
        <Image skill={["section", "nexon"]} />
        <ImgText skill={["section", "nexon", "gray"]} />
        <Card skill={["section", "gmarket"]} />
        <Banner skill={["section", "nexon"]} />
        <Text skill={["section", "nexon"]} />
      </Contents>
      <Footer skill={["section", "nexon", "gray"]} />
    </>
  );
}

export default App;
