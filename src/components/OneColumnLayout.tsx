import { Link } from "react-router-dom";

interface OneColumnLayoutProps {
  title: string;
  description: string;
  image: string;
  index: number;
  
}

const OneColumnLayout: React.FC<OneColumnLayoutProps> = ({
  title,
  description,
  image,
  index,
 
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`d-flex text-start px-3 py-4 ${isEven ? "flex-row" : "flex-row-reverse"
        } two-column-mobile-layout`}
      style={{
        marginTop: index !== 0 ? "20px" : "5px",
        gap: "16px",
        justifyContent: "space-between",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          flex: "1 1 25%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1 className="two-column-title" style={{fontFamily:'Neue Helvetica Medium'}}>{title}</h1>
          <p className="welness-description" style={{fontFamily:'Neue Helvetica thin'}}>{description}</p>
        </div>

       
      </div>
      <div
        style={{
          flex: "1 1 75%",
        }}
      >
        <img
        className="two-column-image"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default OneColumnLayout;
