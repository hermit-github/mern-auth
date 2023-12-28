import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const HomePage = () => {

    console.log('Hi' )
  return (
    <>
      <Layout headerContent={<Header />} heroContent={<Hero />} />
    </>
  );
};

export default HomePage;
