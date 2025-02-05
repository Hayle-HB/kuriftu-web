import React, { useRef, useState } from "react";
import { Container, Carousel as BootstrapCarousel } from "react-bootstrap";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface CarouselProps {
  slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { contextSafe } = useGSAP({ scope: containerRef });

  // Initialize GSAP animations with context-safe approach
  const handleNext = contextSafe(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    gsap.fromTo(
      slideRefs.current[currentIndex],
      { xPercent: 0 },
      { xPercent: -100, duration: 1.2 }
    );
    gsap.fromTo(
      slideRefs.current[nextIndex],
      { xPercent: 100 },
      { xPercent: 0, duration: 1.2 }
    );

    setCurrentIndex(nextIndex);
  });

  const handlePrev = contextSafe(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;

    gsap.fromTo(
      slideRefs.current[currentIndex],
      { xPercent: 0 },
      { xPercent: 100, duration: 1.2 }
    );
    gsap.fromTo(
      slideRefs.current[prevIndex],
      { xPercent: -100 },
      { xPercent: 0, duration: 1.2 }
    );

    setCurrentIndex(prevIndex);
  });

  return (
    <Container ref={containerRef} fluid>
      <BootstrapCarousel
      controls={true}slick-dots
      indicators={true}
      
    >
      {slides.map((slide, index) => (
        <BootstrapCarousel.Item key={index}>
          <div
            ref={(el) => {
              if (el) slideRefs.current[index] = el;
            }}
            
            style={{
              height: "30rem",
              backgroundImage: `url(${slide})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
    </Container>
  );
};

export default Carousel;
