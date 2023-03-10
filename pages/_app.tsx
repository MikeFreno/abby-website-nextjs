import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import AOS from "aos";

import "aos/dist/aos.css";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({});
  }, []);
  return <Component {...pageProps} />;
}
