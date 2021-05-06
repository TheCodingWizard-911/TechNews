import Layout from "../components/Layout";
import "../styles/globalStyles.css";

function TechNews({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default TechNews;
