// Libraries
import React, { useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Row } from "react-bootstrap";

gsap.registerPlugin(useGSAP, ScrollTrigger);


type HeroPanelProps = {
  classNames: string;
  children: ReactNode;
  backgroundImage: string;
};

const HeroPanel: React.FC<HeroPanelProps> = ({
  classNames,
  children,
  backgroundImage,
}) => {
  const CardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const el = CardRef.current;
    if (el) {
      const cardTitle = el.querySelector("h1");
      const cardParagraphs = el.querySelectorAll("p");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          markers: false,
          start: "top 80%", // Adjust the trigger position as needed
          end: "bottom 20%", // Adjust the trigger position as needed
          scrub: 1,
        },
      });

      tl.to([cardTitle, cardParagraphs], {
        y: 30, // Move down by 15px
        ease: "power4.inOut",
        duration: 0.25,
      });
    }
  }, { scope: CardRef });

  return (
    <Row className={classNames} ref={CardRef} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
    </Row>
  );
};

export default HeroPanel;
