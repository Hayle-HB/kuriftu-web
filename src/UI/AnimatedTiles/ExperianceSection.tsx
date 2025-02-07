import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

type FeaturedExpProps ={
    image: string;
    title: string;
    description: string;
}
type ScrollingAnimationProps = {
  featuredExps: FeaturedExpProps[];
};

const ScrollingAnimation: React.FC<ScrollingAnimationProps> = ({ featuredExps }) => {
  const containerRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const section = containerRef.current;
        if(section){
            const textTile = section.querySelector(".scrolling-container-text-wrapper");
            const text = section.querySelector(".scrolling-container-text");
            const tiles = section.querySelectorAll('.scrolling-container-tile');
            
            //freeze the text tile wraper and trigger text reveal
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: textTile,
                    start: 'center center',
                    end: '+=260%',
                    scrub: true,
                    markers: true,
                    pin: true,
                    anticipatePin: 1,
                },
            })

        }

    }, []);

  return (
    <div className="scrolling-container-section" ref={containerRef}>
        <div className="scrolling-container-text-wrapper">
            <div className="scrolling-container-text">
                <h1>Featured</h1>
                <h1>Experiences</h1>
                <Link to='exp'>Explore more Experiences</Link>
            </div>
        </div>
        {featuredExps.map((experience, index)=>(
            <div className="scrolling-container-tile" key={index}>
                <div className={`scrolling-container-image img-${index}`} style={{backgroundImage: `url(${experience.image})`}}>
                    <h3>{experience.title}</h3>
                </div>
                
            </div>
        ))}
        <div className="scrolling-container-link">
        </div>
      
    </div>
  );
};

export default ScrollingAnimation;

/* CSS (LESS format)
.scrolling-container {
  position: relative;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image-tile {
  width: 80%;
  height: 300px;
  background-size: cover;
  background-position: center;
  margin: 20px 0;
}

.sticky-tile {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  padding: 20px;
  text-align: center;
}

.revealing-text {
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
}
*/
