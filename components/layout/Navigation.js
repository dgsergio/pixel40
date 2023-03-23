import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NavFixed from "./NavFixed";

const Navigation = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = e => setScrollTop(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      {scrollTop > 100 && <NavFixed />}
      <NavBar />
    </>
  );
};

export default Navigation;
