import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(useGSAP, ScrollTrigger)

type ContentDataType={
    category: string,
    title: string,
    description: string,
    linkText: string,
    image: string,
    link: string
}

type AnimatedCodexElementProps={
    classname: string,
    contentData: ContentDataType[]
}

const AnimatedCodexElement: React.FC<AnimatedCodexElementProps>=({classname, contentData})=>{

    const containerRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() => {    
        const container = containerRef.current;        

        if (container) {
            const contentElements = container.querySelectorAll('.content--sticky')
            const totalContentElements = contentElements.length;

            contentElements.forEach((el, position) => {

                const isLast = position === totalContentElements-1;
                
                gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: 'center center',
                        end: '+=100%',
                        scrub: true,
                        markers: false
                    }
                })
                .to(el, {
                    ease: 'none',
                    scale: 0.6,
                    opacity: 0,
                    yPercent: isLast ? 125 : 0
                }, 0);

            });
        }
    }, 
    { scope: containerRef });


    return <div className={classname} ref={containerRef}>
        {contentData.map((content, index) =>(
            <div key={index} className={`content content--sticky content--card bg-${index}`}>
                <div className='content__img' style={{backgroundImage: `url(${content.image})` }}>
                </div>
                <div className='content__text__wrapper'>
                    <h5 className="content__subtitle tile-header-font">{content.category}</h5>
                    <h2 className="content__title tile-header-font">{content.title}</h2>
                    <p className="content__text text-meta">{content.description}</p>
                    <Link className='content_link' to={content.link}>{content.linkText}</Link>
                </div>
            </div>
        ))}        
    </div>
}
export default AnimatedCodexElement;