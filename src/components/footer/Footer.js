import "./style.css";

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import gitlab from "./../../img/icons/gitlab.png";

function Footer () {
  return (
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item"><a href="https://vk.com/yorklo"><img src={vk} alt="Link" /></a></li>
              <li className="social__item"><a href="https://instagram.com/ana_dzam?igshid=YmMyMTA2M2Y="><img src={instagram} alt="Link" /></a></li>
              <li className="social__item"><a href="https://gitlab.com/my_project75"><img src={gitlab} alt="Link" /></a></li>
            </ul>
          <div className="copyright">
              <p>© 2023 </p>
          </div>
          </div>
        </div>
      </footer>
       );
}
 
export default Footer;