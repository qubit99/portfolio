import React from "react";
import Header from "./Header.js";
import Carousel from "./Carousel.js";
import Message from "./media.js";
import Bottom from "./footer.js";
function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Message />
      <Bottom />
    </div>
  );
}

export default Home;
