import Logo from "../assets/MiraiZu.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Discord from "../assets/discord.png";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles.footerContainer}>
        <div className={styles.footerFlex}>
          <div className={styles.footerBloc1}>
            <img src={Logo} alt="notre logo" />
            <p>
              Nam posuere accumsan porta. Integer id orci sed ante tincidunt
              tincidunt sit amet sed libero. © Miraizu
            </p>
          </div>
          <div className={styles.footerBloc2}>
            <h2 className={styles.footerTitle}>Entreprise</h2>
            <ul>
              <li>Consulting</li>
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <div className={styles.footerBloc3}>
            <h2 className={styles.footerTitle}>Services</h2>
            <ul>
              <li>Ebooks</li>
              <li>Tutorials</li>
              <li>Webinars</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className={styles.footerBloc4}>
            <h2 className={styles.footerTitle}>Resources</h2>
            <ul>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Social Media</li>
              <li>Content Creation</li>
            </ul>
          </div>
        </div>
        <div className={styles.containerLogo}>
          <img src={Twitter} alt="twitter logo" />
          <img src={Instagram} alt="instagram logo" />
          <img src={Discord} alt="Discord logo" />
        </div>
      </div>
    </div>
  );
}
