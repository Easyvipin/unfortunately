import { ClerkProvider } from "@clerk/nextjs";
import store from "@src/store";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ClerkProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ClerkProvider>
    </Provider>
  );
}
