import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

export default function NavBar() {


    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll handler
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };
    
  return (
    <div className={`sticky top-0 z-20 transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}>
                <nav>
                    <div className="relative flex justify-between px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 z-1">
                        <div className="relative flex items-center gap-16 z-1">
                        <Link onClick={scrollToTop} to='/'>Wines</Link>
                        </div>
                    </div>
                </nav>
    </div>
  )
}
