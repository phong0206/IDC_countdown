import React from "react";
import "./App.css";
import Fade from "react-reveal/Fade";
import { ParallaxProvider } from "react-scroll-parallax";
import NormalClock from "./components/NormalClock/NormalClock.js";
import MainWrapper, {
  NormalClockWrapper,
  LogoImageContainer,
} from "./assets/styles.style";

import LogoImage from "./assets/static/images/logoidc.png";

function App() {
  const deadline = new Date(2022, 11, 27, 19, 0, 0, 0);
  return (
    <div className="App">
      <ParallaxProvider>
        <React.Fragment>
          <MainWrapper>
            <LogoImageContainer>
              <div>
                <a>
                  <img src={LogoImage} alt="logo" />
                </a>
              </div>
              <h2> MỘT HÀNH TRÌNH VƯƠN XA</h2>

              <p>Hanoi Opera House</p>
              <p>19:00 &emsp; 27/12/2022</p>
              <h3>Counting Down</h3>
            </LogoImageContainer>

            <div className="mainContainer">
              <Fade>
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} />
                </NormalClockWrapper>
              </Fade>
            </div>
          </MainWrapper>
        </React.Fragment>
      </ParallaxProvider>
    </div>
  );
}

export default App;
