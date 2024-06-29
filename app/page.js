
import Footer from "../components/Footer.js"
import ArticleHome from "../components/ArticleHome.js"
import ExpertHome from "@/components/ExpertHome";
import Service from "@/components/Service";
import AboutHome from "@/components/AboutHome";
import ContainerHome from "@/components/ContainerHome";
import Serve from "../components/Serve.js";
import Header from "../components/Header.js"
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ContainerHome />
        <Serve />
        <AboutHome />
        <Service />
        <br /><br /><br /><br />
        <ExpertHome />
        <br /><br /><br /><br />
        <ArticleHome />
        <br /><br />
      </main>
      <Footer />

    </>
  );
}
