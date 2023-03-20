import NavHeader from "../components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import VideosHeader from "@/components/layout/sections/videos/VideosHeader";
import Youtube from "@/components/layout/sections/videos/Youtube";

const Videos = () => {
  return (
    <>
      <NavHeader />
      <main className="whitebg">
        <VideosHeader />
        <Youtube />
      </main>
      <Footer />
    </>
  );
};

export default Videos;
