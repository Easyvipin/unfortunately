import { ClerkProvider } from "@clerk/nextjs";
import { SupabaseProvider } from "@src/Contexts/SupabaseContext";
import store from "@src/store";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ClerkProvider>
        <SupabaseProvider>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </SupabaseProvider>
      </ClerkProvider>
    </Provider>
  );
}
