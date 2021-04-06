import "../styles/globals.css";
import "flickity/css/flickity.css";
import { Parallax, Background } from "react-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <Parallax>
      <Component {...pageProps} />
    </Parallax>
  );
}

export default MyApp;
