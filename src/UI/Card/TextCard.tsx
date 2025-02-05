// Libraries
import React, { useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger, Flip } from "gsap/all";

gsap.registerPlugin(Flip, ScrollTrigger);

type TextCardProps = {
  id: string;
  classNames: string;
  triggerElement: ReactNode; // Adjust this if you expect a specific React element
  children: ReactNode;
};

const TextCard: React.FC<TextCardProps> = ({
  id,
  classNames,
  children,
}) => {
  const CardRef = useRef<HTMLDivElement | null>(null);


  return (
    <div id={id} className={classNames} ref={CardRef}>
      {children}
    </div>
  );
};

export default TextCard;
