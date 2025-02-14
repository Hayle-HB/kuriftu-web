
type TextHeroProps = {
    videoURL: string;
    classNames: string;
}
const VideoHero: React.FC<TextHeroProps> = ({ videoURL, classNames }) => {
    return(
        <div className={`hero-video-wrapper ${classNames}`}>
            <video
                className="hero-video"
                src={videoURL}
                autoPlay
                loop
                muted
                playsInline
                onContextMenu={(e) => e.preventDefault()} // Disables right-click menu
            ></video>
        </div>
    )
}
export default VideoHero;