import { AppProps } from "next/app";
import React from "react";
import { Footer, Header, InstallationGuide } from "../components";
import GlobalStyle from "../styles/globals";
import Theme from "../styles/Theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Header />
      <Component {...pageProps} />
      <InstallationGuide />
      <Footer />
      <GlobalStyle />
    </Theme>
  );
};

export default App;
