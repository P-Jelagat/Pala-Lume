import "./Footer.css"
import locationIcon from "../../assets/icons/placeholder.png"
import phoneIcon from "../../assets/icons/call.png"
import emailIcon from "../../assets/icons/email.png"

function Footer (){

    return(
        <footer>
           <div className="footer-content">
              <div className="location-info">
                <h4>Location</h4>
                  <p><img src={locationIcon} alt="" />Mwembe, Cathedral Road, Kisii Town</p>
                  <p><img src={phoneIcon}alt="" />+254116108172</p>
                  <a href="mailto:patiencejelagatt@gmail.com"><img src={emailIcon} alt="" />palalume@gmail.com</a>
                  <p>Open-Hours: Monday-Saturday: 9am to 5pm | Sunday: 9am to 2pm</p>
              </div>
           

                <div className="quick-links">
                    <h4>Quick-Links</h4>
                    <a href="#">Home</a>
                    <a href="">About Us</a>
                    <a href="">Services</a>
                    <a href="">Gallery</a>
                    <a href="">Shop</a>
                    <a href="">Contact Us</a>

                    <div className="quick-links-icons">
                        <img src={locationIcon} alt="" />
                        <img src={locationIcon} alt="" />
                        <img src={locationIcon} alt="" />
                    </div>
                </div>

                <div className="services-cta">
                    <h4>Services and Inquiry CTA</h4>
                </div>

            </div>
        </footer>
    );

}

export default Footer;