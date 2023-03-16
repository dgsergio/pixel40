import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTiktok,
  faInstagram,
  faTwitter,
  faPatreon,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["contenedor-footer"] + " container"}>
        <h4>® Pixel40</h4>
        <ul>
          <li>
            <a
              href="https://youtube.com/@pixel40"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@estudiopixel40"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/estudiopixel40/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/estudiopixel40"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="https://www.patreon.com/pixel40"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faPatreon} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://discord.gg/ryy7pHxxwM"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
