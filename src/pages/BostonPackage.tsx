import BuyTicketBostonPackage from "../components/BuyTicketBoostonPackage";
import Header from "../components/Header/Header";

const BostonPackage = () => {
  return (
    <div>
      <div className="boston-main-sec" style={{width:'50%', margin:'auto', marginTop:'5%', fontFamily:"Neue Helvetica Medium"}}>
        <h3 className="title-txt pt-4" style={{fontFamily:'Neue Helvetica Medium',}}>Buy Boston Day Spa Packages
        </h3>
        <p className="mb-4 description-txt" style={{fontFamily:'Neue Helvetica thin', fontSize:'18px', lineHeight:'27px',fontWeight:'400',fontStyle:'normal', color:'#000'}}>Whether it’s your first time at Kuriftu Water Park or your 100th, we’ve got your ticket to endless fun! There are many different attractions and slides fit for the entire family. Kuriftu Water Park gives special family deals and discounts on water park tickets. For those visiting with groups of 20 or more, we’ve got special group sales ticket for a discount. Plan your family’s next visit when we are hosting one of our many family events.
       </p>
      </div>

      <BuyTicketBostonPackage/>
    </div>
  );
};

export default BostonPackage;
