import Layout from "../components/Layout";

import "../styles/globals.css";

const TechNews = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default TechNews;
