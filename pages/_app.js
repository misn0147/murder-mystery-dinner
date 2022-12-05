import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>Murder Mystery</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
