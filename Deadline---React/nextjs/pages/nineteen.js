import React from 'react';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from 'react-scroll-parallax';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock.js';
import ContactFormPortion from '@deadline/components/ContactForm/ContactForm';
import MainWrapper, {
  MainContentSection,
  ContactForm,
  NormalClockWrapper,
  FooterSection,
  LogoImageContainer,
} from '@deadline/common/ui/nineteen.style';

import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/nineteen';
import '../static/_styles.css';
// Language translation files
import localEng from '@deadline/common/data/translation/nineteen/en.json';
import localAr from '@deadline/common/data/translation/nineteen/ar.json';
import localEs from '@deadline/common/data/translation/nineteen/es.json';
import localDe from '@deadline/common/data/translation/nineteen/de.json';
import localCn from '@deadline/common/data/translation/nineteen/zh.json';
import localIl from '@deadline/common/data/translation/nineteen/he.json';
import { Container, SocialShare } from '../components';
import LogoImage from '@deadline/common/static/images/logoidc.png';

// Language translation Config
const messages = {
  en: localEng,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};

const deadline = new Date(2022, 11, 27, 19, 0, 0, 0);

const IndexPage = () => (
  <ParallaxProvider>
    <LanguageProvider messages={messages}>
      <React.Fragment>
        <Head>
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Anton&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
            rel="stylesheet"
          />

          <link
            rel="icon"
            type="image/x-icon"
            href="/static/favicon/favicon.png"
          />
        </Head>
        <NextSeo
          config={{
            title: 'Coming Soon 19',
            description: 'React Next Coming Soon Template.',
          }}
        />
        <MainWrapper>
          <LogoImageContainer>
            <Link href={'#'}>
              <a>
                <img src={LogoImage} alt="logo" />
              </a>
            </Link>
            <h2> MỘT HÀNH TRÌNH VƯƠN XA</h2>
            
            <p>
                Hanoi Opera House
              </p>
              <p>19:00 &emsp; 27/12/2022</p>
              <h3>
                <FormattedMessage id="mainMessage" />
              </h3>
          </LogoImageContainer>
          
          <Container className="mainContainer">
          
           
              <Fade>
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} />
                </NormalClockWrapper>
              </Fade>
              
              
             
           
          </Container>
          
        </MainWrapper>
        
      </React.Fragment>
    </LanguageProvider>
  </ParallaxProvider>
);

export default IndexPage;
