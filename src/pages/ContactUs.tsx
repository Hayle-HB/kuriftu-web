import ContactUsCard1 from "../components/ContactUsCard1";
import ContactUsCard2 from "../components/ContactUsCard2";
import Header from "../components/Header/Header";
import { contactData } from "../MockData/contactUsData";


const ContactUs = () => {
    return (<div>
        <Header />
        
        <div>
        <ContactUsCard1 />
        <ContactUsCard2 />
        </div>
    </div>);
}

export default ContactUs;