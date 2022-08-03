import "../styles/globals.css";
import { RecoilRoot } from "recoil";

interface Props {
  Component: React.ComponentType<any>;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />;
    </RecoilRoot>
  );
}

export default MyApp;
