import "@/styles/globals.css";
import Layout from "./layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  if (loading) {
    return (
      <div style={{ height: "100vh", width: "100wv", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <LoadingOutlined style={{ fontSize: 60 }} spin />
      </div>
    );
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
