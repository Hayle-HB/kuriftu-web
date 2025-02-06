import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(useGSAP, ScrollTrigger)

type ContentDataType={
    image: string,
    title: string,
    description: string,
    linkText: string,
    link: string
}

type AnimatedCodexElementProps={
    classname: string,
    contentData: ContentDataType
}

const AnimatedCodexOneElement: React.FC<AnimatedCodexElementProps>=({classname, contentData})=>{

    const containerRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() => {    
        const container = containerRef.current;        

        if (container) {
            const image = container.querySelectorAll('.content__one__img')
            gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'center bottom',
                    end: 'center center',
                    scrub: true,
                    markers: true
                }
            })
            .from(image, {
                ease: 'none',
                scale: 0.6,
                borderRadius: '25px'
            }, 0);

        }
    }, 
    { scope: containerRef });


    return <div className={classname} ref={containerRef}>
            <div className={`content__one`}>
                <div className='content__one__img' style={{backgroundImage: `url(${contentData.image})` }}>
                </div>
                <div className='content__one__text__wrapper'>
                    <h2 className="content__one__title tile-header-font">{contentData.title}</h2>
                    <p className="content__one__text text-meta">{contentData.description}</p>
                    <Link className='content__one_link' to={contentData.link}>{contentData.linkText}</Link>
                </div>
            </div>       
    </div>
}
export default AnimatedCodexOneElement;