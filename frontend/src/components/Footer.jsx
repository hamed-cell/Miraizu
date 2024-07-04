import Logo from "../assets/MiraiZu.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Discord from "../assets/discord.png";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <img src={Logo} alt="notre logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi
          blanditiis culpa ullam similique! Officiis fugit reprehenderit
          aspernatur quod voluptas nam voluptate, molestiae repellendus
          quibusdam sapiente similique in maxime. Provident!
        </p>
        <p className={styles.footerTitle}>Entreprise</p>
        <ul>
          <li>Lorem ipsum dolor sit, amet</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <p className={styles.footerTitle}>Services</p>
        <ul>
          <li>Lorem ipsum dolor sit, amet</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <p className={styles.footerTitle}>Resources</p>
        <ul>
          <li>Lorem ipsum dolor sit, amet</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <div className={styles.containerLogo}>
        <img src={Twitter} alt="twitter logo" />
        <img src={Instagram} alt="instagram logo" />
        <img src={Discord} alt="Discord logo" />
      </div>
    </>
  );
}
