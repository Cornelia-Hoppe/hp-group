import React, { useState, useEffect} from 'react'

export default function ScrollToTop() {

    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      });
    }, []);
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };

  return (
    <>
        {showArrow && (
            <i onClick={scrollToTop} className="fa-solid fa-angles-up back-to-top "></i>
        )}
    </>
  )
}
