import React from "react";
import { Link } from "react-router-dom";

interface TwoColumnLayoutProps {
  title: string;
  description: string;
  image: string;
  index: number;
  isEnquiryForm: boolean;
  linkText: string;
  link: string;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  title,
  description,
  image,
  index,
  isEnquiryForm,
  link,
  linkText,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`d-flex text-start  pb-4 ${isEven ? "flex-row" : "flex-row-reverse"
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
          <h1 className="two-column-title p-3" style={{fontFamily:'Neue Helvetica Medium'}}>{title}</h1>
          <p className="welness-description p-3" style={{fontFamily:'Neue Helvetica thin'}}>{description}</p>
        </div>

        <div>
          <hr />
          {isEnquiryForm ? (
            <button style={{ color: "#677C91", padding:'12px' }} className="btn btn-link">
              {linkText}
            </button>
          ) : (
            <a style={{ color: "#677C91", padding:'12px' }} href={link}>
              {linkText}
            </a>
          )}
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

export default TwoColumnLayout;
