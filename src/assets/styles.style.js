import styled from "styled-components";
import BannerBG1 from "./static/images/bg_30th.png";
const MainWrapper = styled.section`
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-image: url(${BannerBG1});
  background-color: #040014;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; /* Resize the background image to cover the entire container */
  @media (max-width: 1300px) and (min-width: 1200px) {
    background-position: center 
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    &.sidebar-open {
      background-position: center;
    }
  }
  @media (max-width: 767px) {
    background-position: center
    background-size: 90%;
  }
  @media (width: 812px) and (height: 375px) {
    background-image: none !important;
  }
`;
export const LogoImageContainer = styled.div`
  text-align: center;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  p {
    font-size: 40px;
    font-family: Crimson;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
    text-align: center;
    max-width: 600px;
    font-weight: 700;
    white-space: nowrap;
    @media (max-width: 1440px) {
      font-size: 30px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      max-width: 100%;
    }
  }

  @media (max-width: 900px) {
    padding-top: 20px;
  }
  img {
    margin: 0;

    width: 200px;
  }
  h2 {
    margin-top: 20px;
    font-size: 60px;
    font-family: Crimson;

    color: #f6e58d;
    line-height: 1.35;
    text-align: center;
    max-width: 660px;
    letter-spacing: 2px;

    @media (max-width: 1440px) {
      font-size: 40px;
      max-width: 550px;
      margin-bottom: 40px;
      line-height: 1.6;
    }
    @media (max-width: 768px) {
      font-size: 43px;
      margin-bottom: 25px;
      line-height: 1.6;
    }
    @media (max-width: 480px) {
      font-size: 32px;
      margin-bottom: 15px;
      line-height: 1.6;
    }
  }
  h3 {
    margin-top: 20px;
    font-size: 60px;
    font-family: Crimson;

    color: white;
    line-height: 1.35;
    text-align: center;
    max-width: 660px;
    letter-spacing: 2px;

    @media (max-width: 1440px) {
      font-size: 40px;
      max-width: 550px;

      line-height: 1.6;
    }
    @media (max-width: 768px) {
      font-size: 44px;

      line-height: 1.6;
    }
    @media (max-width: 480px) {
      font-size: 33px;

      line-height: 1.6;
    }
  }
`;

export const NormalClockWrapper = styled.div`
  position: relative;
  margin-bottom: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1440px) {
    margin-top: 0px;
    margin-bottom: 490px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 470px;
  }
  @media (max-width: 480px) {
    margin-bottom: 460px;
  }
  .NormalClock {
    color: #f6e58d;
    width: 600px;
    @media (max-width: 600px) {
      width: 100%;
    }
    .NormalUnitContainer {
      background: transparent;
      @media (max-width: 600px) {
        width: 80px;
        height: auto;
      }
      .NormalupperCard {
        span {
          font-size: 60px;
          font-family: Crimson;
          color: #f6e58d;
          font-weight: bold;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;

          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .NormallowerCard {
        span {
          font-size: 60px;
          font-family: Crimson;
          color: #fff;
          font-weight: bold;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;

          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .NormalCard {
        span {
          font-size: 60px;
          font-family: Crimson;
          color: #fff;
          font-weight: bold;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;

          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .digitLabel {
        font-size: 14px;
        font-family: Crimson;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        font-weight: 500;
        letter-spacing: 2px;

        @media (max-width: 600px) {
          letter-spacing: 2px;
          margin-top: 5px;
        }
        @media (max-width: 420px) {
          font-size: 12px;
        }
      }
    }
  }
`;

export const MainContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 60px 0;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  @media (max-width: 480px) {
    margin-top: 0px;
  }
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  h2 {
    font-size: 46px;
    font-family: Crimson;
    color: #fff;
    line-height: 1.35;
    text-align: center;
    max-width: 660px;
    letter-spacing: 2px;
    margin-bottom: 40px;
    @media (max-width: 1440px) {
      font-size: 38px;
      max-width: 550px;
      margin-bottom: 40px;
      line-height: 1.6;
    }
    @media (max-width: 768px) {
      font-size: 41px;
      margin-bottom: 25px;
      line-height: 1.6;
    }
    @media (max-width: 480px) {
      font-size: 30px;
      margin-bottom: 15px;
      line-height: 1.6;
    }
  }
`;

export const ContactForm = styled.div`
  margin-top: 60px;
  form {
    margin: 0;
  }
  .field-wrapper {
    input {
      background-color: rgb(255, 255, 255, 0.08);
      color: #fff;
    }
  }
  button {
    background-color: red;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const FooterSection = styled.div`
  position: relative;
  padding-bottom: 40px;
  @media (max-width: 1600px) {
    padding-bottom: 30px;
  }

  .social_profiles {
    justify-content: center;
    .social_profile_item {
      border-radius: 50%;
      background-color: #191c29;
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;
      cursor: pointer;
      a {
        color: #fff;
        font-size: 17px;
        transition: all 0.5s ease;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.25);
        a {
          color: #fff;
        }
      }
    }
  }
  p {
    margin-top: 30px;
    font-size: 14px;
    font-family: Crimson;
    color: rgb(78, 97, 124);
    line-height: 22px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    @media (max-width: 1440px) {
      margin-top: 15px;
    }
    @media (max-width: 340px) {
      font-size: 12px;
    }
  }
`;
export default MainWrapper;
