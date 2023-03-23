import Footer from "@/components/layout/Footer";
import VideosHeader from "@/components/layout/sections/videos/VideosHeader";
import Youtube from "@/components/layout/sections/videos/Youtube";
import Navigation from "@/components/layout/Navigation";

const Videos = () => {
  return (
    <>
      <Navigation />
      <main className="whitebg">
        <VideosHeader />
        <Youtube />
      </main>
      <Footer />
    </>
  );
};

export default Videos;
