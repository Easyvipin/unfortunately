import { ClerkProvider } from "@clerk/nextjs";
import store from "@src/store";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <ClerkProvider>{getLayout(<Component {...pageProps} />)}</ClerkProvider>
    </Provider>
  );
}
