import FooterEnd from "../../components/FooterEnd/footerend";
import FooterSocial from "../../components/FooterSocial/footersocial";
import FooterTop from "../../components/FooterTop/footertop";

function Footer() {
    return ( 
       <div className="footer">
        <FooterTop/>
        <FooterSocial/>
        <FooterEnd/>
       </div>
     );
}

export default Footer;