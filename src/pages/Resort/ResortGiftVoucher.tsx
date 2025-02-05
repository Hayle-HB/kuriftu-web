import { useParams } from "react-router";
import { GIFTVOUCHER } from "../../MockData/giftVoucher";

const ResortGiftVoucher = () => {
  const { slug } = useParams<{ slug: string }>();
  const gift = slug && GIFTVOUCHER[slug];
  if (!gift) {
    return <div>Resort not found</div>;
  }

  return (
    <div className="px-3 py-4">
      <div className="resort-accomodation">
        <h5 className="pt-3 accomdation-detail-title title-txt">{gift.title}</h5>
        <h5 className="px-3 accomdation-detail-text advanture-description description-txt">{gift.description}</h5>
      </div>
    </div>
  );
};

export default ResortGiftVoucher;
