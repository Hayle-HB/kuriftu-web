
type TextHeroProps = {
    text: string;
    classNames: string;
}
const TextHero: React.FC<TextHeroProps> = ({ text, classNames }) => {
    return(
        <div className={`hero-text ${classNames}`}>
            <p>{text}</p>
        </div>
    )
}
export default TextHero;