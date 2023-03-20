import { Footer, Header } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <div className="main-layout">
                <Component {...pageProps} />
            </div>
            <Footer />
        </>
    );
}
