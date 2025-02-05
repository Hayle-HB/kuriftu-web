import AboutUsCard1 from "../components/AboutUsCard1";
import AboutUsCard2 from "../components/AboutUsCard2";
import AboutUsCard3 from "../components/AboutUsCard3";
import AboutUsCard4 from "../components/AboutUsCard4";
import Header from "../components/Header/Header";
import OneColumnLayout from "../components/OneColumnLayout";
import TwoColumnCard from "../components/TwoColumnAbout";
import TwoColumnAbout from "../components/TwoColumnAbout";
import TwoColumnLayout from "../components/TwoColumnLayout";
import { aboutUSPageData } from "../MockData/aboutUsPageData";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div style={{paddingTop:'5%'}}>
      <TwoColumnCard
        description={aboutUSPageData.card1.description}
        image={aboutUSPageData.card1.image}
        index={1}
        isEnquiryForm={false}
        link={aboutUSPageData.card1.link}
        linkText="Explore more"
        title={aboutUSPageData.card1.title}
      />
       <TwoColumnCard
        description={aboutUSPageData.card2.lists.map((item) => item).join("<br />")}
        image={aboutUSPageData.card2.image}
        index={1}
        isEnquiryForm={false}
        link={""}
        linkText={""}
        title={aboutUSPageData.card2.title}
      />
      {/* <OneColumnLayout
        description={aboutUSPageData.card2.lists.join(",")}
        image={aboutUSPageData.card2.image}
        index={1}
        title={aboutUSPageData.card2.title}
      /> */}
      </div>
     
      {/* <AboutUsCard1 /> */}
      <AboutUsCard2 />
      {/* <AboutUsCard3 /> */}
      <AboutUsCard4 />
    </div>
  );
};

export default AboutUs;
