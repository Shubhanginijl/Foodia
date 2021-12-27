import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
      <div>
        <section className="footerBlock">
          <article>
            <div className="footmenu"></div>
            <div className="footmenu1">
              <ul>
                <li style={{ color: "rgb(71,70,70)" }}><b> COMPANY</b></li>
                <li>About</li>
                <li>JOBS</li>
                <li>For the Record</li>
              </ul>
            </div>
            <div className="footmenu2">
              <ul>
                <li style={{ color: "rgb(71,70,70)" }}><b>COMMUNITIES</b></li>
                <li>For Artists</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li> Investors</li>
                <li> Vendors</li>
              </ul>
            </div>

            <div className="footmenu3">
              <ul>
                <li style={{ color: "rgb(71,70,70)" }}><b>USEFUL</b></li>
                <li> LINKS</li>
                <li>Support</li>
                <li>More About Us</li>
                <li>Free Mobile App</li>
              </ul>
            </div>

            <div className="sideBlock">
              <span>
                <i
                  class="fab fa-instagram"
                  style={{
                    padding: "5px",
                    background: "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%",
                    borderRadius: "15px",
                    marginRight: "10px",
                    color:"white"
                  }}
                ></i>
                <i
                  class="fab fa-twitter"
                  style={{
                    padding: "10px",
                    background: "white",
                    borderRadius: "25px",
                    marginRight: "0px",
                    color:"#12b8ee"
                  }}
                ></i>
                <i
                  class="fab fa-facebook"
                  style={{
                    padding: "10px",
                    background: "white",
                    borderRadius: "25px",
                    color:"blue"
                  }}
                ></i>
              </span>
            </div>
          </article>
        </section>
      </div>
    );
};

export default Footer;
