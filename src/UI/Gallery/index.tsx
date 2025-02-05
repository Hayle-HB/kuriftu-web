// libraries
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, Flip } from "gsap/all";
import useWindowDimensions from "../../Hooks/WindowDimensions";
import { Row } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger, Flip, useGSAP);
ScrollTrigger.normalizeScroll(true);

interface Caption {
  header?: string;
  text?: string;
}

interface GalleryProps {
  items: string[];
  caption?: Caption;
}

const Gallery: React.FC<GalleryProps> = ({ items, caption }) => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const id = "gallery-stack";

  useGSAP(
    () => {
      const el = galleryRef.current;
      if (el) {
        const galleryItems = el.querySelectorAll(".gallery-item");
        const galleryCaption = el.querySelector(".gallery-caption");
        const flipItems =".gallery-item, .gallery-caption";
        el.classList.add("gallery--switch");
        const state = Flip.getState(flipItems, {props: 'filter, opacity'});
        el.classList.remove("gallery--switch");
        //el.classList.toggle("gallery--switch");
        
        Flip.to(state, {
          ease: 'none',
          absoluteOnLeave: true,
          //absolute: false,
          scale: true,
          //simple: true,
          scrollTrigger: {
            trigger: el,
            start: "center center",
            end: '+=300%',
            pin: true,
            markers: false,
            scrub: true,
            anticipatePin: 1
          },
          stagger: 0
        });
      
        return () => {
          gsap.set(flipItems, { clearProps: "transform, position" });
        };
        
      }
      
    },
    { scope: galleryRef }
  );

  return (
    <div id={id} className="gallery-stack gallery" ref={galleryRef} >
      {items.map((item, index) => (
        <div
          key={index}
          className="gallery-item"
          style={{ backgroundImage: `url(${item})` }}
        ></div>
      ))}
      {caption && (
        <div className="gallery-item gallery-caption">
          {caption.header && <h1>{caption.header}</h1>}
          <p>{caption.text}</p>
        </div>
      )}      
     </div>
  );
};

export default Gallery;
