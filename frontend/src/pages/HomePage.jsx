import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <>
      <Layout headerContent={<Header />} heroContent={<Hero />} />
    </>
  );
};

export default HomePage;
