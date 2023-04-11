import { Layout } from "@/components/templates";
import type { NextPage } from "next";
import { About, Contact, Hero, Projects, Quote, Skills, SocialMedia } from "@/components/organisms";

const Home: NextPage = () => {
  return (
    <>
      <SocialMedia />
      <Layout title="Data Analyst" metaDescription="This is Novice portfolio">
        <Hero />
        <Quote />
        <About />
        <Skills />
        <Projects type="main" hasDetails />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
