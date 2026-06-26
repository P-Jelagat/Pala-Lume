import "./Header.css";
import placeholderIcon from "../../assets/icons/placeholder.png";
import emailIcon from "../../assets/icons/email.png"; 
import logo from "../../assets/icons/logo.png"; 
import menuButton from "../../assets/icons/more.png"; 

function Header () {
  return(
      <div className="header">

        <div className="contact-band">
          <span><img src={placeholderIcon}/>Mwembe, Catheral Road</span>
          <span>Open hours&gt; Mon-Sat:9am-5pm|Sun:9am-2pm  </span>
          <a href="mailto:patiencejelagatt@gmail.com"><img src={emailIcon} alt="" />palalume@gmail.com</a>
        </div>

        <div className="nav-bar">

            <div className="logo"><img src={logo} alt="" /></div>

            <div className="menu-button">
                <a href=""><img src={menuButton} alt="" /></a>
            </div>

            <div className="nav-links">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Gallery</a>
              <a href="">Services</a>
              <a href="">Shop</a>
              <a href="">Contact</a>
            </div>

            <button>Book Appointment</button>

        </div>

      </div>
  );
}

export default Header;